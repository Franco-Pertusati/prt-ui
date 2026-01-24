import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CachaNavComponent } from "./components/cacha-nav/cacha-nav.component";
import { Nav2Component } from "./components/nav2/nav2.component";

@Component({
  selector: 'app-cacha',
  imports: [RouterOutlet, CachaNavComponent, Nav2Component],
  templateUrl: './cacha.component.html'
})
export class CachaComponent {

}
