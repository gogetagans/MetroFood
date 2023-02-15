import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTERPATH } from '@models/enums/router-path.enum';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: ROUTERPATH.LOGIN,
    loadComponent: () =>
      import('./components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '**',
    redirectTo: ROUTERPATH.LOGIN,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
