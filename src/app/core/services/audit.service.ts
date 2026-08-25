import { Injectable, signal } from '@angular/core';

// ============================================================
// MODELOS DE ENTRADA
// ============================================================

/** Transacción tal como viene del JSON de Banco Galicia */
export interface GaliciaTransaction {
  ID: string;
  Fecha: string; // "DD/MM/YYYY"
  DescripcionAMostrar: string;
  DescripcionSide: string;
  ImporteCredito: string; // ej: "5.250,51"
  ImporteDebito: string;
  EsMovimientoPendiente: boolean;
  [key: string]: any;
}

/** Transacción tal como viene del JSON de Justapropina */
export interface PropinaJustaTransaction {
  type: string;
  user_id: string;
  shiftDate: string; // "YYYY-MM-DD"
  date: string; // "YYYY-MM-DD" -> fecha en que la plataforma dice que pagó
  amount: number;
  paidamount: number;
  pendingamount: number;
  [key: string]: any;
}

// ============================================================
// MODELOS DE SALIDA
// ============================================================

export interface MatchedPair {
  propina: PropinaJustaTransaction;
  galicia: GaliciaTransaction;
  diferenciaDias: number; // fecha acreditación (Galicia) - fecha pago informado (Justapropina)
  diferenciaMonto: number; // montoGalicia - montoPropinaJusta (debería ser ~0)
}

export interface AuditResult {
  filtroEmisor: string;
  ventanaDiasTolerancia: number;

  totales: {
    totalPagadoSegunPropinaJusta: number;
    totalPendienteSegunPropinaJusta: number;
    totalAcreditadoEnGalicia: number;
    diferenciaTotal: number;
  };

  /** Pares que se pudieron conciliar 1 a 1 por monto + fecha */
  emparejadas: MatchedPair[];

  /**
   * Justapropina dice que esto ya se pagó (paidamount > 0) pero no se encontró
   * ningún crédito de ATTO en Galicia que lo respalde dentro de la ventana de días.
   * ESTA es la lista que hay que mirar con lupa.
   */
  propinaSinAcreditar: PropinaJustaTransaction[];

  /**
   * Créditos de ATTO (concepto propina) en Galicia que no matchean con
   * ninguna transacción "pagada" de Justapropina. Como ahora se filtra por
   * concepto, esto ya NO debería incluir sueldo/aguinaldo — si aparece algo
   * acá, es una discrepancia real que vale la pena mirar.
   */
  galiciaSinExplicar: GaliciaTransaction[];
}

@Injectable({ providedIn: 'root' })
export class AuditService {

  /** Tolerancia en pesos para considerar dos montos "iguales" (redondeo) */
  private readonly TOLERANCIA_MONTO = 0.01;

  /** Key bajo la que se guarda la última comparación en localStorage */
  private readonly STORAGE_KEY = 'auditoria-propinas:ultima-comparacion';

  private readonly resultadoSignal = signal<AuditResult | null>(this.leerDeLocalStorage());

  /**
   * Última comparación, en tiempo real: se actualiza sola cada vez que se
   * corre compararTransacciones() en esta pestaña, y también si se corre
   * en OTRA pestaña (vía el evento 'storage' del navegador).
   */
  readonly resultado = this.resultadoSignal.asReadonly();

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (event: StorageEvent) => {
        if (event.key !== this.STORAGE_KEY) return;
        try {
          this.resultadoSignal.set(event.newValue ? (JSON.parse(event.newValue) as AuditResult) : null);
        } catch (error) {
          console.log('No se pudo interpretar la comparación recibida de otra pestaña:', error);
        }
      });
    }
  }

  /**
   * Compara el JSON de movimientos de Galicia con el JSON de Justapropina
   * y arma un informe con totales, emparejamientos y discrepancias.
   *
   * @param galiciaJson       Array de movimientos tal como los devuelve Galicia.
   * @param propinaJustaJson  Array de transacciones tal como las devuelve Justapropina.
   * @param opciones.nombreEmisor        Texto a buscar en la descripción del movimiento de Galicia (default "ATTO").
   * @param opciones.concepto            Texto que distingue el concepto "propina" del resto de lo que paga
   *                                       el mismo emisor (sueldo, indemnizaciones, etc). Default "VARIOS".
   * @param opciones.diasHistorialGalicia Cuántos días hacia atrás de Galicia considerar (default 30, porque
   *                                       Justapropina solo entrega los últimos 30 días).
   * @param opciones.ventanaDiasTolerancia  Máximo de días de diferencia entre la fecha que informa
   *                                         Justapropina y la fecha en que Galicia acredita, para
   *                                         considerarlos el mismo pago (default 12, por los 10 días
   *                                         hábiles de demora + margen).
   */
  compararTransacciones(
    galiciaJson: GaliciaTransaction[],
    propinaJustaJson: PropinaJustaTransaction[],
    opciones?: {
      nombreEmisor?: string;
      concepto?: string;
      diasHistorialGalicia?: number;
      ventanaDiasTolerancia?: number;
    }
  ): AuditResult {
    const nombreEmisor = (opciones?.nombreEmisor ?? 'ATTO').toUpperCase();
    const concepto = (opciones?.concepto ?? 'VARIOS').toUpperCase();
    const diasHistorialGalicia = opciones?.diasHistorialGalicia ?? 30;
    const ventanaDiasTolerancia = opciones?.ventanaDiasTolerancia ?? 12;

    // Recorte de Galicia a la misma ventana de tiempo que entrega Justapropina,
    // para no arrastrar créditos viejos que no tienen forma de matchear.
    const galiciaEnRango = this.filtrarUltimosNDias(galiciaJson, diasHistorialGalicia);

    // 1. Créditos de Galicia que corresponden al emisor Y al concepto de propinas, ya acreditados
    const galiciaCreditos = galiciaEnRango
      .filter(tx => !tx.EsMovimientoPendiente)
      .filter(tx => this.esDelEmisor(tx, nombreEmisor, concepto))
      .map(tx => ({
        tx,
        fecha: this.parseFechaGalicia(tx.Fecha),
        monto: this.parseMontoGalicia(tx.ImporteCredito)
      }))
      .filter(item => item.monto > 0);

    // 2. Transacciones de Justapropina que ya fueron efectivamente pagadas
    const propinaPagadas = propinaJustaJson
      .filter(tx => tx.paidamount > 0)
      .map(tx => ({ tx, fecha: this.parseFechaISO(tx.date), monto: tx.paidamount }));

    // 3. Emparejamiento 1 a 1 por monto (con tolerancia) dentro de la ventana de días.
    //    Se recorre en orden de fecha para que, ante ambigüedad, matchee lo más cercano primero.
    const galiciaDisponible = [...galiciaCreditos];
    const emparejadas: MatchedPair[] = [];
    const propinaSinAcreditar: PropinaJustaTransaction[] = [];

    const propinaOrdenada = [...propinaPagadas].sort((a, b) => a.fecha.getTime() - b.fecha.getTime());

    for (const p of propinaOrdenada) {
      const candidatos = galiciaDisponible
        .map((g, idx) => ({ ...g, idx, diffDias: this.diffEnDias(p.fecha, g.fecha) }))
        // el crédito en el banco no debería ser anterior al día que la plataforma dice que pagó
        // (se tolera 1 día por husos horarios / cierre de turno), y no más lejos que la ventana
        .filter(g => Math.abs(g.monto - p.monto) <= this.TOLERANCIA_MONTO)
        .filter(g => g.diffDias >= -1 && g.diffDias <= ventanaDiasTolerancia)
        .sort((a, b) => Math.abs(a.diffDias) - Math.abs(b.diffDias));

      if (candidatos.length > 0) {
        const elegido = candidatos[0];
        emparejadas.push({
          propina: p.tx,
          galicia: elegido.tx,
          diferenciaDias: elegido.diffDias,
          diferenciaMonto: this.redondear(elegido.monto - p.monto)
        });
        galiciaDisponible.splice(galiciaDisponible.findIndex(g => g.tx.ID === elegido.tx.ID), 1);
      } else {
        propinaSinAcreditar.push(p.tx);
      }
    }

    const galiciaSinExplicar = galiciaDisponible.map(g => g.tx);

    // 4. Totales generales del período
    const totalPagadoSegunPropinaJusta = this.redondear(
      propinaJustaJson.reduce((acc, tx) => acc + (tx.paidamount ?? 0), 0)
    );
    const totalPendienteSegunPropinaJusta = this.redondear(
      propinaJustaJson.reduce((acc, tx) => acc + (tx.pendingamount ?? 0), 0)
    );
    // Sumar TODOS los créditos de ATTO con el concepto indicado (p.ej. VARIOS),
    // no solo los que efectivamente matchearon 1:1. Sueldo/aguinaldo quedan
    // fuera porque no cumplen el filtro de concepto aplicado en galiciaCreditos.
    const totalAcreditadoEnGalicia = this.redondear(
      galiciaCreditos.reduce((acc, item) => acc + item.monto, 0)
    );

    const resultado: AuditResult = {
      filtroEmisor: nombreEmisor,
      ventanaDiasTolerancia,
      totales: {
        totalPagadoSegunPropinaJusta,
        totalPendienteSegunPropinaJusta,
        totalAcreditadoEnGalicia,
        diferenciaTotal: this.redondear(totalPagadoSegunPropinaJusta - totalAcreditadoEnGalicia)
      },
      emparejadas,
      propinaSinAcreditar,
      galiciaSinExplicar
    };

    this.guardarUltimaComparacion(resultado);
    this.resultadoSignal.set(resultado);

    return resultado;
  }

  /** Devuelve la última comparación guardada en localStorage, o null si todavía no se hizo ninguna */
  obtenerUltimaComparacion(): AuditResult | null {
    return this.leerDeLocalStorage();
  }

  // ============================================================
  // HELPERS
  // ============================================================

  private esDelEmisor(tx: GaliciaTransaction, nombreEmisor: string, concepto: string): boolean {
    const desc = `${tx.DescripcionAMostrar ?? ''} ${tx.DescripcionSide ?? ''}`.toUpperCase();
    return desc.includes(nombreEmisor) && desc.includes(concepto);
  }

  /** Deja solo los movimientos de Galicia dentro de los últimos N días (desde hoy) */
  private filtrarUltimosNDias(txs: GaliciaTransaction[], dias: number): GaliciaTransaction[] {
    const cutoff = new Date();
    cutoff.setHours(0, 0, 0, 0);
    cutoff.setDate(cutoff.getDate() - dias);
    return txs.filter(tx => this.parseFechaGalicia(tx.Fecha) >= cutoff);
  }

  private guardarUltimaComparacion(resultado: AuditResult): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(resultado));
    } catch (error) {
      console.log('No se pudo guardar la comparación en localStorage:', error);
    }
  }

  private leerDeLocalStorage(): AuditResult | null {
    try {
      if (typeof localStorage === 'undefined') return null;
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? (JSON.parse(raw) as AuditResult) : null;
    } catch (error) {
      console.log('No se pudo leer la última comparación de localStorage:', error);
      return null;
    }
  }

  /** "5.250,51" -> 5250.51 */
  private parseMontoGalicia(importe: string): number {
    if (!importe) return 0;
    const normalizado = importe.replace(/\./g, '').replace(',', '.');
    const valor = parseFloat(normalizado);
    return isNaN(valor) ? 0 : valor;
  }

  /** "18/08/2026" -> Date */
  private parseFechaGalicia(fecha: string): Date {
    const [dia, mes, anio] = fecha.split('/').map(Number);
    return new Date(anio, mes - 1, dia);
  }

  /** "2026-08-18" -> Date */
  private parseFechaISO(fecha: string): Date {
    const [anio, mes, dia] = fecha.split('-').map(Number);
    return new Date(anio, mes - 1, dia);
  }

  private diffEnDias(desde: Date, hasta: Date): number {
    const MS_POR_DIA = 1000 * 60 * 60 * 24;
    return Math.round((hasta.getTime() - desde.getTime()) / MS_POR_DIA);
  }

  private redondear(valor: number): number {
    return Math.round(valor * 100) / 100;
  }
}