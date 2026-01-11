import { Component, inject, input } from '@angular/core';
import { Check, SalonService } from '../../../../core/services/salon.service';
import { CommonModule } from '@angular/common';
import { MoneyPipe } from '../../../../core/pipes/money.pipe';
import { MinutesToTimePipe } from '../../../../core/pipes/minutes-to-time.pipe';

@Component({
  selector: 'app-check',
  imports: [CommonModule, MoneyPipe, MinutesToTimePipe],
  templateUrl: './check.component.html'
})
export class CheckComponent {
  check = input.required<Check>()

  salonService = inject(SalonService)

  calculateTotalCheck() {
    return this.salonService.calculateCheckTotal(this.check())
  }

  getProductMinutesSinceAdded(prodDate: Date) {
    return this.salonService.getProductMinutesSinceAdded(prodDate)
  }
}
