import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterDocsComponent } from "./components/footer-docs/footer-docs.component";
import { NavDocsComponent } from "./components/nav-docs/nav-docs.component";
import { PrtButton } from "../../prt-ui/prt-button/prt-button.component";

@Component({
  selector: 'app-docs',
  imports: [RouterOutlet, SidebarComponent, FooterDocsComponent, NavDocsComponent, PrtButton],
  templateUrl: './docs.component.html',
})
export class DocsComponent {
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  toggleSidebar() {
    if (this.sidebar) {
      this.sidebar.toggleSidebar();
    }
  }
}
