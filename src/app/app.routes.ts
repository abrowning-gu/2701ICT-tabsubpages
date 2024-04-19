import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'subpage2',
    loadComponent: () => import('./tab1/subpage2/subpage2.page').then( m => m.Subpage2Page)
  },

];
