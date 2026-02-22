import { Component, inject } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { DialogMessage, DialogService } from '../../../../core/services/dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  imports: [PrtButton],
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {
  dialogMessage: DialogMessage = {
    title: 'Titulo del dialogo',
    description: '¿Esta seguro de realizar esta accion con resultado booleano?',
    trueBtnText: 'Si, realizar accion',
    falseBtnText: 'No, cancelar'
  }
  dialog = inject(DialogService)

  async onDelete() {
    const confirmed = await this.dialog.openBooleanDialog({
      title: '¿Estás seguro?',
      description: 'Esta acción no se puede deshacer',
      trueBtnText: 'Eliminar',
      falseBtnText: 'Cancelar'
    });

    if (confirmed) {
      console.log("Se borro todo")
    }
  }
}
