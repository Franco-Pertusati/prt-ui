import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CachaNavComponent } from "./components/cacha-nav/cacha-nav.component";

@Component({
  selector: 'app-cacha',
  imports: [RouterOutlet, CachaNavComponent],
  templateUrl: './cacha.component.html'
})
export class CachaComponent {

}
