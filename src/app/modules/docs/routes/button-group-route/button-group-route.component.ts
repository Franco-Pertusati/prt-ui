import { Component, Type } from '@angular/core';
import { ButtonGroupComponent } from "../../../../prt-ui/button-group/button-group.component";
import { ProductsListComponent } from '../../../sgTests/products-list/products-list.component';
import { ComandaPanelComponent } from '../../../sgTests/comanda-panel/comanda-panel.component';
import { TabItem } from '../../../../core/interfaces/buttonList';

@Component({
  selector: 'app-button-group-route',
  imports: [ButtonGroupComponent],
  templateUrl: './button-group-route.component.html'
})
export class ButtonGroupRouteComponent {
  tabs: TabItem[] = [
    {
      label: 'Productos',
      component: ProductsListComponent
    },
    {
      label: 'Comanda',
      component: ComandaPanelComponent
    },
    {
      label: 'Mozzos',
      component: ProductsListComponent
    }
  ]
}
