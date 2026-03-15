import { Component } from '@angular/core';
import { DocThumbnailComponent } from "../doc-thumbnail/doc-thumbnail.component";
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { PrtCheckBoxComponent } from "../../../../prt-ui/prt-check-box/prt-check-box.component";

@Component({
  selector: 'app-doc-thumbnail-list',
  imports: [DocThumbnailComponent, PrtButton, PrtCheckBoxComponent],
  templateUrl: './doc-thumbnail-list.component.html'
})
export class DocThumbnailListComponent {

}
