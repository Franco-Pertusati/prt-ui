import { Component } from '@angular/core';
import { CopyButtonComponent } from "../../../../prt-ui/copy-button/copy-button.component";
import { TableRow, PrtTableComponent, TableColumn } from '../../../../prt-ui/prt-table/prt-table.component';

@Component({
  selector: 'app-copy-button-page',
  imports: [CopyButtonComponent, PrtTableComponent],
  templateUrl: './copy-button-page.component.html'
})
export class CopyButtonPageComponent {
  copyButtonPropsColumns: TableColumn[] = [
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

  copyButtonPropsData: TableRow[] = [
    {
      input: 'textToCopy',
      type: 'string',
      default: 'required',
      description: 'Texto que será copiado al portapapeles cuando se haga click en el botón.'
    },
    {
      input: 'variant',
      type: "'default' | 'outlined' | 'secondary' | 'ghost' | 'destructive'",
      default: "'secondary'",
      description: 'Variante visual del botón.'
    },
    {
      input: 'classList',
      type: 'string',
      default: '-',
      description: 'Clases CSS adicionales que se aplicarán al componente.'
    },
    {
      input: 'label',
      type: 'string',
      default: '-',
      description: 'Texto que se muestra en el botón antes de copiar.'
    },
    {
      input: 'labelAfterCopy',
      type: 'string',
      default: '-',
      description: 'Texto que reemplaza el label luego de copiar (se restaura después de ~2s).'
    },
    {
      input: 'icon',
      type: 'string',
      default: '-',
      description: 'Nombre del icono (Material Symbols) que se muestra en el botón.'
    },
    {
      input: 'iconAfterCopy',
      type: 'string',
      default: '-',
      description: 'Icono que se mostrará temporalmente después de copiar.'
    },
    {
      input: 'showLabel',
      type: 'boolean',
      default: 'true',
      description: 'Controla si el label es visible.'
    },
    {
      input: 'showIcon',
      type: 'boolean',
      default: 'true',
      description: 'Controla si el icono es visible.'
    }
  ];

}
