import { Routes } from '@angular/router';
import { ButtonsComponent } from './routes/buttons/buttons.component';
import { CardComponent } from './routes/card/card.component';
import { DialogComponent } from './routes/dialog/dialog.component';
import { TabsComponent } from './routes/tabs/tabs.component';
import { TabsRouterComponent } from './routes/tabs-router/tabs-router.component';
import { ToastsComponent } from './routes/toasts/toasts.component';

export const docsRoutes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'dialogs', component: DialogComponent },
  { path: 'toasts', component: ToastsComponent },
  { path: 'card', component: CardComponent },
  { path: 'router-tabs', component: TabsRouterComponent },
  { path: 'tabs', component: TabsComponent },
  { path: '', redirectTo: 'buttons', pathMatch: 'full' }
];
