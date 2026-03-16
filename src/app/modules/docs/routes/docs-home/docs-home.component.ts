import { Component } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { DocsComponentsShowcaseComponent } from "../../components/docs-components-showcase/docs-components-showcase.component";
import { DocThumbnailListComponent } from "../../components/doc-thumbnail-list/doc-thumbnail-list.component";
import { ItemContainerComponent } from "../../../../prt-ui/item-container/item-container.component";
import { PrtRadioComponent, RadioOption } from "../../../../prt-ui/prt-radio/prt-radio.component";
import { ThemeToggleBtnComponent } from "../../../../prt-ui/theme-toggle-btn/theme-toggle-btn.component";
import { PrtCheckBoxComponent } from "../../../../prt-ui/prt-check-box/prt-check-box.component";

@Component({
  selector: 'app-docs-home',
  imports: [PrtButton, DocsComponentsShowcaseComponent, DocThumbnailListComponent, ItemContainerComponent, PrtRadioComponent, ThemeToggleBtnComponent, PrtCheckBoxComponent],
  templateUrl: './docs-home.component.html'
})
export class DocsHomeComponent {
  radioOptions: RadioOption[] = [
    {
      value: '1',
      label: 'Files'
    },
    {
      value: '2',
      label: 'Tasks'
    },
    {
      value: '3',
      label: 'Notes'
    }
  ]
}
