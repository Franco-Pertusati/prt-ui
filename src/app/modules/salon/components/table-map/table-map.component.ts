import { Component } from '@angular/core';
import { DinningTable, SalonService } from '../../../../core/services/salon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-map',
  imports: [],
  templateUrl: './table-map.component.html'
})
export class TableMapComponent {
  dinningTables: DinningTable[] = [];

  constructor(
    private salonService: SalonService,
    private router: Router
  ) {
    this.dinningTables = this.salonService.getMesas();
  }

  goToMesaDetalle(mesaId: number): void {
    this.router.navigate(['/salon/table', mesaId]);
  }

  calculateTableTotal(mesaId: number): number {
    return this.salonService.calculateTableTotal(mesaId);
  }
}
