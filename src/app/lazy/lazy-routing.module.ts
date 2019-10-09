import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LazyComponent} from './test/lazy.component';
import {InfoComponent} from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent
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
