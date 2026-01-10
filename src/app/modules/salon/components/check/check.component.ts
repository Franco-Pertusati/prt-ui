import { Component, input } from '@angular/core';
import { CheckProduct } from '../../../../core/services/salon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check',
  imports: [CommonModule],
  templateUrl: './check.component.html'
})
export class CheckComponent {
  products = input<CheckProduct[]>([]);
}
