import { Component } from '@angular/core';
import { ThemeToggleBtnComponent } from "../../../../prt-ui/theme-toggle-btn/theme-toggle-btn.component";
import { CounterComponent } from "../../../../prt-ui/counter/counter.component";
import { KbdComponent } from "../../../../prt-ui/prt-kbd/kbd/kbd.component";
import { KbdGroupComponent } from "../../../../prt-ui/prt-kbd/kbd-group/kbd-group.component";
import { PrtRadioComponent, RadioOption } from "../../../../prt-ui/prt-radio/prt-radio.component";
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { SpinnerComponent } from "../../../../prt-ui/spinner/spinner.component";

@Component({
  selector: 'app-docs-components-showcase',
  imports: [ThemeToggleBtnComponent, CounterComponent, KbdComponent, KbdGroupComponent, PrtRadioComponent, PrtButton, SpinnerComponent],
  templateUrl: './docs-components-showcase.component.html'
})
export class DocsComponentsShowcaseComponent {
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
