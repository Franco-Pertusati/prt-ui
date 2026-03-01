import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DinningTable } from '../../../../core/services/salon.service';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";

@Component({
  selector: 'app-table-context-menu',
  imports: [PrtButton],
  templateUrl: './table-context-menu.component.html'
})
export class TableContextMenuComponent {
  @Input() table!: DinningTable;
  @Output() action = new EventEmitter<{ action: string; table: DinningTable }>();

  visible = false;
  x = 0;
  y = 0;

  open(event: MouseEvent, table: DinningTable) {
    event.preventDefault();
    event.stopPropagation();
    this.table = table;
    this.x = event.clientX;
    this.y = event.clientY;
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  emit(action: string) {
    this.action.emit({ action, table: this.table });
    this.close();
  }

  @HostListener('document:click')
  @HostListener('document:contextmenu')
  onDocumentClick() {
    this.close();
  }
}
