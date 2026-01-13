import { Component } from '@angular/core';
import { ItemContainerComponent } from "../../../../prt-ui/item-container/item-container.component";

@Component({
  selector: 'app-home',
  imports: [ItemContainerComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  images = [
    "https://picsum.photos/seed/1/800/600",
    "https://picsum.photos/seed/2/800/600",
    "https://picsum.photos/seed/3/800/600",
    "https://picsum.photos/seed/4/800/600",
    "https://picsum.photos/seed/5/800/600",
    "https://picsum.photos/seed/6/800/600",
    "https://picsum.photos/seed/7/800/600",
    "https://picsum.photos/seed/8/800/600",
    "https://picsum.photos/seed/9/800/600"
  ]
}
