import { Routes } from '@angular/router';
import { DocsComponent } from './modules/docs/docs.component';
import { docsRoutes } from './modules/docs/docs.routes';
import { SalonComponent } from './modules/salon/salon.component';
import { salonRoutes } from './modules/salon/salon.routes';
import { HomeComponent } from './modules/home/home.component';
import { TipAuditComponent } from './modules/tip-audit/tip-audit.component';
import { JosePortfolioComponent } from './modules/jose-portfolio/jose-portfolio.component';

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
    path: 'audit',
    component: TipAuditComponent,
  },
  {
    path: 'jose',
    component: JosePortfolioComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
