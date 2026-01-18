import { Component, inject } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-toasts',
  imports: [PrtButton],
  templateUrl: './toasts.component.html'
})
export class ToastsComponent {
  toast = inject(ToastService);

  testDefaultToast() {
    this.toast.success('Titutlo', 'Mensajito del toast.')
  }
}
