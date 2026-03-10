import { Component } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { DocsComponentsShowcaseComponent } from "../../components/docs-components-showcase/docs-components-showcase.component";
import { DocThumbnailListComponent } from "../../components/doc-thumbnail-list/doc-thumbnail-list.component";

@Component({
  selector: 'app-docs-home',
  imports: [PrtButton, DocsComponentsShowcaseComponent, DocThumbnailListComponent],
  templateUrl: './docs-home.component.html'
})
export class DocsHomeComponent {

}
