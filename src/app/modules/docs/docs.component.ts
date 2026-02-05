import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterDocsComponent } from "./components/footer-docs/footer-docs.component";
import { NavDocsComponent } from "./components/nav-docs/nav-docs.component";

@Component({
  selector: 'app-docs',
  imports: [RouterOutlet, SidebarComponent, FooterDocsComponent, NavDocsComponent],
  templateUrl: './docs.component.html',
})
export class DocsComponent {

}
