import { Routes } from '@angular/router';
import { DocsComponent } from './modules/docs/docs.component';
import { docsRoutes } from './modules/docs/docs.routes';

export const routes: Routes = [
  {
    path: 'docs',
    component: DocsComponent,
    children: docsRoutes
  },
  {
    path: '',
    redirectTo: 'docs',
    pathMatch: 'full'
  }
];
