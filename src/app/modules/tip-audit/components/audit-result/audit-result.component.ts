import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { AuditResult, AuditService } from '../../../../core/services/audit.service';

@Component({
  selector: 'app-audit-result',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './audit-result.component.html',
  exportAs: 'auditResult'
})
export class AuditResultComponent {
  private readonly auditService = inject(AuditService);

  /** Señal de solo lectura con el resultado de la última auditoría (o null si no hay ninguna todavía) */
  readonly resultado = this.auditService.resultado;

  /** Alias por si preferís no acordarte de si es AuditResult o AuditResult|null */
  readonly ultimaComparacion: () => AuditResult | null = this.resultado;

  get totales() {
    return this.resultado()?.totales ?? null;
  }

  /** % de lo que debería acreditarse que efectivamente se acreditó, tope 100 */
  get porcentajeAcreditado(): number {
    const t = this.totales;
    if (!t || t.totalPagadoSegunPropinaJusta <= 0) return 0;
    return Math.min(100, Math.round((t.totalAcreditadoEnGalicia / t.totalPagadoSegunPropinaJusta) * 100));
  }

  /** Cuánto falta acreditar (0 si ya está todo o si sobra) */
  get faltante(): number {
    const t = this.totales;
    return t ? Math.max(0, t.totalPagadoSegunPropinaJusta - t.totalAcreditadoEnGalicia) : 0;
  }

  /** Cuánto se acreditó de más respecto de lo esperado (0 si falta o está justo) */
  get sobrante(): number {
    const t = this.totales;
    return t ? Math.max(0, t.totalAcreditadoEnGalicia - t.totalPagadoSegunPropinaJusta) : 0;
  }

  /** 'ok' si la diferencia es menor a $1 (redondeo), si no 'falta' o 'sobra' */
  get estado(): 'ok' | 'falta' | 'sobra' {
    const t = this.totales;
    if (!t || Math.abs(t.diferenciaTotal) < 1) return 'ok';
    return t.diferenciaTotal > 0 ? 'falta' : 'sobra';
  }
}