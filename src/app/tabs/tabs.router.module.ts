import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'workouts',
        children: [
          {
            path: '',
            loadChildren: () => import('../workouts/workouts.module').then(m => m.WorkoutsPageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/workouts',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/workouts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [IonicModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
