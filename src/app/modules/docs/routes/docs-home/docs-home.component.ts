import { Component } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { DocsComponentsShowcaseComponent } from "../../components/docs-components-showcase/docs-components-showcase.component";

@Component({
  selector: 'app-docs-home',
  imports: [PrtButton, DocsComponentsShowcaseComponent],
  templateUrl: './docs-home.component.html'
})
export class DocsHomeComponent {

}
