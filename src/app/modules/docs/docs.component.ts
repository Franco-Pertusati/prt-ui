import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArticleContainerComponent } from "./components/article-container/article-container.component";

@Component({
  selector: 'app-docs',
  imports: [RouterOutlet, SidebarComponent, ArticleContainerComponent],
  templateUrl: './docs.component.html',
})
export class DocsComponent {

}
