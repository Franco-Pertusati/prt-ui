import { Component } from '@angular/core';
import { KbdGroupComponent } from '../../../../prt-ui/prt-kbd/kbd-group/kbd-group.component';
import { KbdComponent } from "../../../../prt-ui/prt-kbd/kbd/kbd.component";

@Component({
  selector: 'app-kbd-route',
  imports: [KbdGroupComponent, KbdComponent],
  templateUrl: './kbd-route.component.html'
})
export class KbdRouteComponent {

}
