import { Component } from '@angular/core';
import { Check, DinningTable, SalonService } from '../../../../core/services/salon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from "../../../../prt-ui/button-group/button-group.component";
import { CardBodyComponent } from '../../../../prt-ui/prt-card/card-body/card-body.component';
import { CardContainerComponent } from "../../../../prt-ui/prt-card/card-container/card-container.component";

@Component({
  selector: 'app-table-detail',
  imports: [CommonModule, ButtonGroupComponent, CardBodyComponent, CardContainerComponent],
  templateUrl: './table-detail.component.html'
})
export class TableDetailComponent {
  table: DinningTable | undefined;
  tableId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private salonService: SalonService
  ) { }

  ngOnInit(): void {
    this.tableId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadtableData();
  }

  loadtableData(): void {
    this.table = this.salonService.gettableById(this.tableId);
  }

  calculateCheckTotal(check: Check): number {
    return this.salonService.calculateCheckTotal(check);
  }

  calculateTableTotal(): number {
    return this.salonService.calculateTableTotal(this.tableId);
  }

  requestBill(): void {
    this.salonService.requestBill(this.tableId);
    this.loadtableData();
  }

  payTable(): void {
    this.salonService.payTable(this.tableId);
    this.loadtableData();
  }

  goBack(): void {
    this.router.navigate(['/salon']);
  }
}
