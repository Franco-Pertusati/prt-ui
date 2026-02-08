import { Routes } from '@angular/router';
import { DocsComponent } from './modules/docs/docs.component';
import { docsRoutes } from './modules/docs/docs.routes';
import { SalonComponent } from './modules/salon/salon.component';
import { salonRoutes } from './modules/salon/salon.routes';
import { HomeComponent } from './modules/home/home.component';
import { MoneyAppComponent } from './modules/money-app/money-app.component';

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
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'money',
    component: MoneyAppComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
