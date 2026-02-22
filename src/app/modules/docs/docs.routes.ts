import { Routes } from '@angular/router';
import { ButtonsComponent } from './routes/buttons/buttons.component';
import { CardComponent } from './routes/card/card.component';
import { DialogComponent } from './routes/dialog/dialog.component';
import { ToastsComponent } from './routes/toasts/toasts.component';
import { KbdRouteComponent } from './routes/kbd-route/kbd-route.component';
import { CheckBoxRouteComponent } from './routes/check-box-route/check-box-route.component';
import { SpinnerPageComponent } from './routes/spinner-page/spinner-page.component';
import { CopyButtonPageComponent } from './routes/copy-button-page/copy-button-page.component';
import { ConfirmDialogComponent } from './routes/confirm-dialog/confirm-dialog.component';

export const docsRoutes: Routes = [
  { path: 'button', component: ButtonsComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'confirm-dialog', component: ConfirmDialogComponent },
  { path: 'toast', component: ToastsComponent },
  { path: 'card', component: CardComponent },
  { path: 'kbd', component: KbdRouteComponent },
  { path: 'check-box', component: CheckBoxRouteComponent },
  { path: 'spinner', component: SpinnerPageComponent },
  { path: 'copy-button', component: CopyButtonPageComponent },
  { path: '', redirectTo: 'button', pathMatch: 'full' }
];
