import { Component } from '@angular/core';
import { KbdGroupComponent } from '../../../../prt-ui/prt-kbd/kbd-group/kbd-group.component';
import { KbdComponent } from "../../../../prt-ui/prt-kbd/kbd/kbd.component";
import { TableRow, PrtTableComponent, TableColumn } from '../../../../prt-ui/prt-table/prt-table.component';

@Component({
  selector: 'app-kbd-route',
  imports: [KbdGroupComponent, KbdComponent, PrtTableComponent],
  templateUrl: './kbd-route.component.html'
})
export class KbdRouteComponent {
  kbdPropsColumns: TableColumn[] = [
    { header: 'Input', key: 'input', cellType: 'code' },
    { header: 'Tipo', key: 'type', cellType: 'badge' },
    { header: 'Default', key: 'default', cellType: 'code' },
    { header: 'Descripción', key: 'description', cellType: 'html' }
  ];

  kbdPropsData: TableRow[] = [
    { input: 'app-kbd', type: 'component', default: '-', description: 'Componente que representa una tecla individual.' },
    { input: 'app-kbd-group', type: 'component', default: '-', description: 'Agrupa múltiples `app-kbd` con separadores.' }
  ];
}
