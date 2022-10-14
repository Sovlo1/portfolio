import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '/',
    component: MainComponent,
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
