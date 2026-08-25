import { Component } from '@angular/core';
import { AuditService } from '../../../../core/services/audit.service';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";

@Component({
  selector: 'app-audit-form',
  standalone: true,
  templateUrl: './audit-form.component.html',
  imports: [PrtButton]
})
export class AuditFormComponent {

  constructor(private auditService: AuditService) {}

  comparar(propinaJustaInput: HTMLInputElement, galiciaInput: HTMLInputElement): void {
    try {
      const propinaJustaJson = JSON.parse(propinaJustaInput.value);
      const galiciaJson = JSON.parse(galiciaInput.value);

      const resultado = this.auditService.compararTransacciones(galiciaJson, propinaJustaJson);
      console.log(resultado);
    } catch (error) {
      console.log('No se pudo parsear alguno de los dos JSON:', error);
    }
  }
}