import { Routes } from '@angular/router';
import { ButtonsComponent } from './routes/buttons/buttons.component';
import { CardComponent } from './routes/card/card.component';
import { DialogComponent } from './routes/dialog/dialog.component';
import { TabsComponent } from './routes/tabs/tabs.component';
import { TabsRouterComponent } from './routes/tabs-router/tabs-router.component';
import { ToastsComponent } from './routes/toasts/toasts.component';
import { KbdRouteComponent } from './routes/kbd-route/kbd-route.component';
import { ButtonGroupRouteComponent } from './routes/button-group-route/button-group-route.component';

export const docsRoutes: Routes = [
  { path: 'button', component: ButtonsComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'toast', component: ToastsComponent },
  { path: 'card', component: CardComponent },
  { path: 'router-tabs', component: TabsRouterComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'kbd', component: KbdRouteComponent },
  { path: 'button-group', component: ButtonGroupRouteComponent },
  { path: '', redirectTo: 'button', pathMatch: 'full' }
];
