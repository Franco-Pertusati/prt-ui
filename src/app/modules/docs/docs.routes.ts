import { Routes } from '@angular/router';
import { DocsHomeComponent } from './routes/docs-home/docs-home.component';

export const docsRoutes: Routes = [
  { path: 'home', component: DocsHomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
