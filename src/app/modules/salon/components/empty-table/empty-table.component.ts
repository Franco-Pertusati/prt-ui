import { Component } from '@angular/core';
import { ItemContainerComponent } from "../../../../prt-ui/item-container/item-container.component";
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { CounterComponent } from "../../../../prt-ui/counter/counter.component";

@Component({
  selector: 'app-empty-table',
  imports: [ItemContainerComponent, PrtButton, CounterComponent],
  templateUrl: './empty-table.component.html'
})
export class EmptyTableComponent {

}
