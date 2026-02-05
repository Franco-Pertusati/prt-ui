import { Component } from '@angular/core';
import { SpinnerComponent } from "../../../../prt-ui/spinner/spinner.component";
import { CardComponent } from "../card/card.component";
import { CardContainerComponent } from "../../../../prt-ui/prt-card/card-container/card-container.component";
import { CardBodyComponent } from "../../../../prt-ui/prt-card/card-body/card-body.component";
import { TableRow, PrtTableComponent, TableColumn } from '../../../../prt-ui/prt-table/prt-table.component';

@Component({
  selector: 'app-spinner-page',
  imports: [SpinnerComponent, CardContainerComponent, CardBodyComponent, PrtTableComponent],
  templateUrl: './spinner-page.component.html'
})
export class SpinnerPageComponent {
  spinnerPropsColumns: TableColumn[] = [
    { header: 'Input', key: 'input', cellType: 'code' },
    { header: 'Tipo', key: 'type', cellType: 'badge' },
    { header: 'Default', key: 'default', cellType: 'code' },
    { header: 'Descripción', key: 'description', cellType: 'html' }
  ];

  spinnerPropsData: TableRow[] = [
    { input: 'classList', type: 'string', default: '-', description: 'Clases CSS para personalizar el spinner.' }
  ];
}
