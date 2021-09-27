import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  {
    path: 'upload',
    children: [
      {
        path: '',
        loadChildren: () => import('./upload/upload.module').then(m => m.UploadPageModule),
      },
    ],
  },
  {
    path: 'workout/:id',
    children: [
      {
        path: '',
        loadChildren: () => import('./workout/workout.module').then(m => m.WorkoutPageModule),
      },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
