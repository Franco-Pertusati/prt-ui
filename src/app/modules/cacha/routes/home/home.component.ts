import { Component, inject } from '@angular/core';
import { ItemContainerComponent } from "../../../../prt-ui/item-container/item-container.component";
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { DialogService } from '../../../../core/services/dialog.service';
import { ContactDialogComponent } from '../../components/contact-dialog/contact-dialog.component';
import { CarrouselComponent } from "../../components/carrousel/carrousel.component";

@Component({
  selector: 'app-home',
  imports: [ItemContainerComponent, PrtButton, CarrouselComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  dialog = inject(DialogService)

  openContactDialog() {
    this.dialog.openDialog(ContactDialogComponent)
  }

  images = [
    "https://picsum.photos/seed/1/800/600",
    "https://picsum.photos/seed/2/800/600",
    "https://picsum.photos/seed/3/800/600",
    "https://picsum.photos/seed/4/800/600",
    "https://picsum.photos/seed/5/800/600",
    "https://picsum.photos/seed/6/800/600",
    "https://picsum.photos/seed/7/800/600",
    "https://picsum.photos/seed/8/800/600",
    "https://picsum.photos/seed/9/800/600",
    "https://picsum.photos/seed/10/800/600",
    "https://picsum.photos/seed/11/800/600",
    "https://picsum.photos/seed/12/800/600",
    "https://picsum.photos/seed/13/800/600",
    "https://picsum.photos/seed/14/800/600"
  ]
}
