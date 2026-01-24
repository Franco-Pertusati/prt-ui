import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { WorkComponent } from './routes/work/work.component';
import { CatalogComponent } from './routes/catalog/catalog.component';

export const cachaRoutes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'mis-trabajos', component: WorkComponent },
    { path: 'catalogo', component: CatalogComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
