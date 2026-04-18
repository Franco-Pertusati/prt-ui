import { Component, input } from '@angular/core';

@Component({
  selector: 'prt-container',
  imports: [],
  templateUrl: './prt-container.component.html'
})
export class PrtContainerComponent {
  shadowSize = input<'shadow-sm' | 'shadow' | 'shadow-lg' | 'shadow-xl'>('shadow')
}
