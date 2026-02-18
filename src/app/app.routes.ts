import { Routes } from '@angular/router';
import { Directivas } from '../pages/directivas/directivas';
import { Arreglos } from '../pages/arreglos/arreglos';
import { Defers } from '../pages/defers/defers';

export const routes: Routes = [
  {
    path: 'directivas',
    component: Directivas,
  },
  {
    path: 'arreglos',
    component: Arreglos,
  },
  {
    path: 'defer',
    component: Defers,
  },
  {
    path: '**',
    redirectTo: 'directivas',
    pathMatch: 'full',
  }
];
