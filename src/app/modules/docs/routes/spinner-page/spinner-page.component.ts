import { Component } from '@angular/core';
import { SpinnerComponent } from "../../../../prt-ui/spinner/spinner.component";
import { CardComponent } from "../card/card.component";
import { CardContainerComponent } from "../../../../prt-ui/prt-card/card-container/card-container.component";
import { CardBodyComponent } from "../../../../prt-ui/prt-card/card-body/card-body.component";

@Component({
  selector: 'app-spinner-page',
  imports: [SpinnerComponent, CardContainerComponent, CardBodyComponent],
  templateUrl: './spinner-page.component.html'
})
export class SpinnerPageComponent {
  
}
