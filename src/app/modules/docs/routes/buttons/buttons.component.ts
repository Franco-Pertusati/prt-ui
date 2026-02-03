import { Component } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { TableRow, PrtTableComponent, TableConfig, TableColumn } from '../../../../prt-ui/prt-table/prt-table.component';

@Component({
  selector: 'app-buttons',
  imports: [PrtButton, PrtTableComponent],
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {
  buttonPropsColumns: TableColumn[] = [
    {
      header: 'Input',
      key: 'input',
      cellType: 'code'
    },
    {
      header: 'Tipo',
      key: 'type',
      cellType: 'badge'
    },
    {
      header: 'Default',
      key: 'default',
      cellType: 'code'
    },
    {
      header: 'Descripción',
      key: 'description',
      cellType: 'html'
    }
  ];

  buttonPropsData: TableRow[] = [
    {
      input: 'variant',
      type: "'default' | 'outlined' | 'secondary' | 'ghost' | 'destructive'",
      default: "'default'",
      description: 'Variante visual del botón. Define el estilo de fondo, bordes y colores.'
    },
    {
      input: 'classList',
      type: 'string',
      default: "-",
      description: 'Clases CSS adicionales que se aplicarán al botón.'
    },
    {
      input: 'label',
      type: 'string',
      default: "-",
      description: 'Texto que se mostrará dentro del botón.'
    },
    {
      input: 'icon',
      type: 'string',
      default: "-",
      description: 'Nombre del icono de Material Symbols que se mostrará. Ejemplo: <code>home</code>, <code>settings</code>.'
    },
    {
      input: 'showLabel',
      type: 'boolean',
      default: 'true',
      description: 'Controla si se muestra el label del botón. Si es <code>false</code>, solo se mostrará el icono.'
    },
    {
      input: 'showIcon',
      type: 'boolean',
      default: 'true',
      description: 'Controla si se muestra el icono del botón. Si es <code>false</code>, solo se mostrará el label.'
    },
    {
      input: 'notifications',
      type: 'number',
      default: '0',
      description: 'Número de notificaciones pendientes (para badge de notificación).'
    }
  ];
}
