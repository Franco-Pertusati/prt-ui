import { Component } from '@angular/core';
import { Check, DinningTable, SalonService } from '../../../../core/services/salon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-detail',
  imports: [CommonModule],
  templateUrl: './table-detail.component.html'
})
export class TableDetailComponent {
mesa: DinningTable | undefined;
  mesaId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private salonService: SalonService
  ) {}

  ngOnInit(): void {
    this.mesaId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadMesaData();
  }

  loadMesaData(): void {
    this.mesa = this.salonService.getMesaById(this.mesaId);
  }

  calculateCheckTotal(check: Check): number {
    return this.salonService.calculateCheckTotal(check);
  }

  calculateTableTotal(): number {
    return this.salonService.calculateTableTotal(this.mesaId);
  }

  requestBill(): void {
    this.salonService.requestBill(this.mesaId);
    this.loadMesaData();
  }

  payTable(): void {
    this.salonService.payTable(this.mesaId);
    this.loadMesaData();
  }

  goBack(): void {
    this.router.navigate(['/salon']);
  }
}
