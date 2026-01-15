import { Routes } from '@angular/router';
import { DocsComponent } from './modules/docs/docs.component';
import { docsRoutes } from './modules/docs/docs.routes';
import { SalonComponent } from './modules/salon/salon.component';
import { salonRoutes } from './modules/salon/salon.routes';
import { CachaComponent } from './modules/cacha/cacha.component';
import { cachaRoutes } from './modules/cacha/cacha.routes';
import { HomeComponent } from './modules/home/home.component';

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
    path: 'cacha',
    component: CachaComponent,
    children: cachaRoutes
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
