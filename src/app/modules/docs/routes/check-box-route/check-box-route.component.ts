import { Component } from '@angular/core';
import { PrtCheckBoxComponent } from "../../../../prt-ui/prt-check-box/prt-check-box.component";
import { TableRow, PrtTableComponent, TableColumn } from '../../../../prt-ui/prt-table/prt-table.component';

@Component({
  selector: 'app-check-box-route',
  imports: [PrtCheckBoxComponent, PrtTableComponent],
  templateUrl: './check-box-route.component.html'
})
export class CheckBoxRouteComponent {
  checkBoxPropsColumns: TableColumn[] = [
    { header: 'Input', key: 'input', cellType: 'code' },
    { header: 'Tipo', key: 'type', cellType: 'badge' },
    { header: 'Default', key: 'default', cellType: 'code' },
    { header: 'Descripción', key: 'description', cellType: 'html' }
  ];

  checkBoxPropsData: TableRow[] = [
    { input: 'label', type: 'string', default: '-', description: 'Texto que se muestra al lado del control.' },
    { input: 'labelChecked', type: 'string', default: '-', description: 'Label alternativo cuando está checked.' },
    { input: 'disabled', type: 'boolean', default: 'false', description: 'Desactiva el control cuando es true.' },
    { input: 'variant', type: "'default' | 'outlined' | 'secondary' | 'ghost'", default: "'default'", description: 'Variante visual del checkbox.' },
    { input: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamaño del control.' },
    { input: 'icon', type: 'string', default: '-', description: 'Icono cuando está unchecked.' },
    { input: 'iconChecked', type: 'string', default: '-', description: 'Icono cuando está checked.' },
    { input: 'iconUnchecked', type: 'string', default: '-', description: 'Icono para estado unchecked.' },
    { input: 'showIcon', type: 'boolean', default: 'true', description: 'Controla si el icono es visible.' },
    { input: 'showLabel', type: 'boolean', default: 'true', description: 'Controla si el label es visible.' },
    { input: 'checked', type: 'boolean', default: 'false', description: 'Estado del control (model).'}
  ];
}
