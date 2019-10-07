import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {FormComponent} from './form/form.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {SecAuthGuard} from './sec-auth.guard';


const ROUTERS: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [ SecAuthGuard ],
    component: LoginComponent,
  },
  {
    path: 'form',
    canActivate: [AuthGuard],
    component: FormComponent,
  },
  {
    path: 'lazy',
    canActivate: [AuthGuard],
    loadChildren: () => import('./lazy/lazy.module').then(mod => mod.LazyModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(ROUTERS)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


