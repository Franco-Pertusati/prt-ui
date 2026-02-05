import { Component, inject } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { ToastService } from '../../../../core/services/toast.service';
import { TableRow, PrtTableComponent, TableColumn } from '../../../../prt-ui/prt-table/prt-table.component';

@Component({
  selector: 'app-toasts',
  imports: [PrtButton, PrtTableComponent],
  templateUrl: './toasts.component.html'
})
export class ToastsComponent {
  toast = inject(ToastService);

  testDefaultToast() {
    this.toast.default('Titutlo', 'Mensajito del toast.')
  }

  testSuccesToast() {
    this.toast.success('Titutlo', 'Mensajito del toast.')
  }

  testDangerToast() {
    this.toast.error('Titutlo', 'Mensajito del toast.')
  }

  toastPropsColumns: TableColumn[] = [
    { header: 'Input', key: 'input', cellType: 'code' },
    { header: 'Tipo', key: 'type', cellType: 'badge' },
    { header: 'Default', key: 'default', cellType: 'code' },
    { header: 'Descripción', key: 'description', cellType: 'html' }
  ];

  toastPropsData: TableRow[] = [
    { input: 'createToast(toast)', type: 'function', default: '-', description: 'Crea un toast a partir del objeto `Toast`.' },
    { input: 'default(title, message?)', type: 'function', default: '-', description: 'Crea un toast con variante por defecto.' },
    { input: 'success(title, message?)', type: 'function', default: '-', description: 'Crea un toast con variante de éxito.' },
    { input: 'error(title, message?)', type: 'function', default: '-', description: 'Crea un toast con variante de error.' },
    { input: 'closeToast()', type: 'function', default: '-', description: 'Cierra el toast visible más antiguo.' }
  ];
}
