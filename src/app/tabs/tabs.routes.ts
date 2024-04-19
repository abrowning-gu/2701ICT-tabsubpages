import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { SubpagePage } from '../tab1/subpage/subpage.page';
import { Subpage2Page } from '../tab1/subpage2/subpage2.page';
import { Tab1Page } from '../tab1/tab1.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
       
        children:[
          {path:'',component:Tab1Page},
          {path:'subpage',component:SubpagePage},
          {path:'subpage2',component:Subpage2Page},
          
        ]
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
