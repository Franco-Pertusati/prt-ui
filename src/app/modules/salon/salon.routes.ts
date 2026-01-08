import { Routes } from '@angular/router';
import { SalonComponent } from './salon.component';
import { TableDetailComponent } from './components/table-detail/table-detail.component';
import { TableMapComponent } from './components/table-map/table-map.component';

export const salonRoutes: Routes = [
  { path: '', component: TableMapComponent },
  { path: 'table/:id', component: TableDetailComponent },
];
