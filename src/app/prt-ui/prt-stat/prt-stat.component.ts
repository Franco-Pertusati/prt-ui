import { Component, input } from '@angular/core';
import { PrtContainerComponent } from "../prt-container/prt-container.component";

export interface StatCard {
  name: string
  value: number
  symbol: string
  variataion: number
}

@Component({
  selector: 'prt-stat',
  imports: [PrtContainerComponent],
  templateUrl: './prt-stat.component.html'
})

export class PrtStatComponent {
  statcard = input.required<StatCard>()
}
