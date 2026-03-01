import { Component, inject, input, signal } from '@angular/core';
import { Category, Product, SalonService } from '../../../../core/services/salon.service';
import { PrtRadioComponent, RadioOption } from "../../../../prt-ui/prt-radio/prt-radio.component";
import { CounterComponent } from "../../../../prt-ui/counter/counter.component";
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";

@Component({
  selector: 'app-add-prod-dialog',
  imports: [PrtRadioComponent, CounterComponent, PrtButton],
  templateUrl: './add-prod-dialog.component.html'
})
export class AddProdDialogComponent {
  salon = inject(SalonService)
  prods: Product[] = []
  cat: Category[] = []
  options: RadioOption[] = []

  constructor() {
    this.prods = this.salon.getProducts()
    this.cat = this.salon.getCategories()

    this.options = [
      { value: 'favs', icon: 'star', label: '' },
      ...this.cat.map(c => ({ value: c.id.toString(), label: c.name }))
    ];
  }

  ngOnInit() {
    
  }
}
