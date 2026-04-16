import { Component } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { TestDashboardComponent } from "../../components/test-dashboard/test-dashboard.component";

@Component({
  selector: 'app-docs-home',
  imports: [PrtButton, TestDashboardComponent],
  templateUrl: './docs-home.component.html'
})
export class DocsHomeComponent {
}
