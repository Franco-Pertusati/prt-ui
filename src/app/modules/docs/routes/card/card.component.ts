import { Component } from '@angular/core';
import { CardHeaderComponent } from "../../../../prt-ui/prt-card/card-header/card-header.component";
import { CardBodyComponent } from "../../../../prt-ui/prt-card/card-body/card-body.component";
import { CardFooterComponent } from "../../../../prt-ui/prt-card/card-footer/card-footer.component";
import { CardContainerComponent } from "../../../../prt-ui/prt-card/card-container/card-container.component";

@Component({
  selector: 'app-card',
  imports: [CardHeaderComponent, CardBodyComponent, CardFooterComponent, CardContainerComponent],
  templateUrl: './card.component.html'
})
export class CardComponent {

}
