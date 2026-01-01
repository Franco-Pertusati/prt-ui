import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogContainerComponent } from "./prt-ui/prt-dialog/dialog-container/dialog-container.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DialogContainerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
