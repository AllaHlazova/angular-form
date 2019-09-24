import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {FormComponent} from './form/form.component';
import {HeaderBtnComponent} from './header-btn/header-btn.component';


const ROUTERS: Route[] = [
  {
    path: '',
    component: HeaderBtnComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(ROUTERS)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


