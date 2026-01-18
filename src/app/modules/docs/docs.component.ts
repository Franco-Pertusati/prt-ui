import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-docs',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './docs.component.html',
})
export class DocsComponent {

}
