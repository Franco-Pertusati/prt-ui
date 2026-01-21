import { Component } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { CounterComponent } from "../../../../prt-ui/counter/counter.component";

@Component({
  selector: 'app-empty-table',
  imports: [PrtButton, CounterComponent],
  templateUrl: './empty-table.component.html'
})
export class EmptyTableComponent {

}
