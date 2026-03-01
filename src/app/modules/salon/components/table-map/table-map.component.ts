import { Component, HostListener, inject } from '@angular/core';
import { DinningTable, SalonService } from '../../../../core/services/salon.service';
import { Router } from '@angular/router';
import { CardContainerComponent } from "../../../../prt-ui/prt-card/card-container/card-container.component";
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { ToastService } from '../../../../core/services/toast.service';
import { TableContextMenuComponent } from "../table-context-menu/table-context-menu.component";

@Component({
  selector: 'app-table-map',
  imports: [CardContainerComponent, PrtButton, TableContextMenuComponent],
  templateUrl: './table-map.component.html'
})

export class TableMapComponent {
  toast = inject(ToastService)
  dinningTables: DinningTable[] = [];

  constructor(
    private salonService: SalonService,
    private router: Router
  ) {
    this.dinningTables = this.salonService.gettables();
  }

  goTotableDetalle(tableId: number): void {
    this.router.navigate(['/salon/table', tableId]);
  }

  calculateTableTotal(tableId: number): number {
    return this.salonService.calculateTableTotal(tableId);
  }

  onMenuAction(action: string, table: DinningTable) {
    switch (action) {
      case 'ver':
        this.goTotableDetalle(table.id);
        break;
      case 'editar':
        break;
      case 'eliminar':
        break;
    }
  }
}
