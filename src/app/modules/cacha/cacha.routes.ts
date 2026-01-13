import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';

export const cachaRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
