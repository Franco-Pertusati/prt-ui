import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocNavComponent } from "./components/doc-nav/doc-nav.component";

@Component({
  selector: 'app-docs',
  imports: [RouterOutlet, DocNavComponent],
  templateUrl: './docs.component.html',
})  
export class DocsComponent {}
