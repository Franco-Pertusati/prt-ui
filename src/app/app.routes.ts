import { Routes } from '@angular/router';
import { DocsComponent } from './modules/docs/docs.component';
import { docsRoutes } from './modules/docs/docs.routes';
import { SalonComponent } from './modules/salon/salon.component';
import { salonRoutes } from './modules/salon/salon.routes';

export const routes: Routes = [
  {
    path: 'docs',
    component: DocsComponent,
    children: docsRoutes
  },
  {
    path: 'salon',
    component: SalonComponent,
    children: salonRoutes
  },
  {
    path: '',
    redirectTo: 'docs',
    pathMatch: 'full'
  }
];
