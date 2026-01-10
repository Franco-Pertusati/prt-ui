import { Component, Type } from '@angular/core';
import { ButtonGroupComponent } from "../../../../prt-ui/button-group/button-group.component";
import { TabItem } from '../../../../core/interfaces/buttonList';

@Component({
  selector: 'app-button-group-route',
  imports: [ButtonGroupComponent],
  templateUrl: './button-group-route.component.html'
})
export class ButtonGroupRouteComponent {
  tabs: TabItem[] = []
}
