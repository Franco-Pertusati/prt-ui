import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogContainerComponent } from "./prt-ui/prt-dialog/dialog-container/dialog-container.component";
import { ToastListComponent } from "./prt-ui/prt-toast/toast-list/toast-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DialogContainerComponent, ToastListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
