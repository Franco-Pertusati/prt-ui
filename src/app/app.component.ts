import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrtButton } from "./prt-ui/prt-button/prt-button.component";
import { ThemeToggleBtnComponent } from "./prt-ui/theme-toggle-btn/theme-toggle-btn.component";
import { DialogContainerComponent } from "./prt-ui/prt-dialog/dialog-container/dialog-container.component";
import { DialogService } from './core/services/dialog.service';
import { ToastListComponent } from "./prt-ui/prt-toast/toast-list/toast-list.component";
import { ToastService } from './core/services/toast.service';
import { CardContainerComponent } from "./prt-ui/prt-card/card-container/card-container.component";
import { CardHeaderComponent } from "./prt-ui/prt-card/card-header/card-header.component";
import { CardBodyComponent } from "./prt-ui/prt-card/card-body/card-body.component";
import { CardFooterComponent } from "./prt-ui/prt-card/card-footer/card-footer.component";
import { BtnGroupComponent } from "./prt-ui/btn-group/btn-group.component";

@Component({
  selector: 'app-root',
  imports: [PrtButton, ThemeToggleBtnComponent, DialogContainerComponent, PrtButton, ToastListComponent, CardContainerComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent, BtnGroupComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  dialog = inject(DialogService)
  toast = inject(ToastService)

  buttonGroup = [
    {
      label: 'Productos',
      route: 'productos'
    },
    {
      label: 'Ingredientes',
      route: 'ingredientes'
    }
  ]

  openDialogTest() {
    this.dialog.openDialog(PrtButton)
  }

  tryToast(variant: string) {
    switch (variant) {
      case 'default':
        this.toast.createToast({
          title: 'Toast title',
          message: 'The toast message for futures generations',
          icon: 'info'
        })
        break;
      case 'succes':
        this.toast.success('Succes doing something')
        break
      case 'error':
        this.toast.error('Error doing something')
        break
      default:
        break;
    }
  }
}
