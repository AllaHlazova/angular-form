import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListUserComponent} from './list-user/list-user.component';
import {InfoComponent} from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: ListUserComponent
  },
  {
    path: 'info',
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
