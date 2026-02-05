import { Component } from '@angular/core';
import { CardHeaderComponent } from "../../../../prt-ui/prt-card/card-header/card-header.component";
import { CardBodyComponent } from "../../../../prt-ui/prt-card/card-body/card-body.component";
import { CardFooterComponent } from "../../../../prt-ui/prt-card/card-footer/card-footer.component";
import { CardContainerComponent } from "../../../../prt-ui/prt-card/card-container/card-container.component";
import { TableRow, PrtTableComponent, TableColumn } from '../../../../prt-ui/prt-table/prt-table.component';

@Component({
  selector: 'app-card',
  imports: [CardHeaderComponent, CardBodyComponent, CardFooterComponent, CardContainerComponent, PrtTableComponent],
  templateUrl: './card.component.html'
})
export class CardComponent {
  cardPropsColumns: TableColumn[] = [
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

  cardPropsData: TableRow[] = [
    {
      input: 'classList',
      type: 'string',
      default: '-',
      description: 'Clases CSS adicionales que se aplicarán al contenedor.'
    }
  ];
}
