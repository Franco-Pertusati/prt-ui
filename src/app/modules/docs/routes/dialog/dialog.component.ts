import { Component, inject } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { DialogService } from '../../../../core/services/dialog.service';
import { DialogTestComponent } from '../../components/dialog-test/dialog-test.component';
import { TableRow, PrtTableComponent, TableColumn } from '../../../../prt-ui/prt-table/prt-table.component';

@Component({
  selector: 'app-dialog',
  imports: [PrtButton, PrtTableComponent],
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  dialog = inject(DialogService)

  openDialog() {
    this.dialog.openDialog(DialogTestComponent)
  }

  dialogPropsColumns: TableColumn[] = [
    { header: 'Input', key: 'input', cellType: 'code' },
    { header: 'Tipo', key: 'type', cellType: 'badge' },
    { header: 'Default', key: 'default', cellType: 'code' },
    { header: 'Descripción', key: 'description', cellType: 'html' }
  ];

  dialogPropsData: TableRow[] = [
    { input: 'openDialog(component, data?)', type: 'function', default: '-', description: 'Abre un diálogo mostrando el componente pasado como argumento y datos opcionales.' },
    { input: 'closeDialog()', type: 'function', default: '-', description: 'Cierra el diálogo actual.' }
  ];
}
