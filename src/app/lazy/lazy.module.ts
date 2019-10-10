import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListUserComponent} from './list-user/list-user.component';
import {LazyRoutingModule} from './lazy-routing.module';
import {InfoComponent} from './info/info.component';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {InfoUserComponent} from './info/info-user/info-user.component';
import {MatDividerModule} from '@angular/material';
import {TitlePipe} from '../pipe/title.pipe';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatListModule,
    HttpClientModule,
    MatDividerModule,
],
  exports: [MatListModule],
  declarations: [ListUserComponent, InfoComponent, InfoUserComponent, TitlePipe]
})
export class LazyModule { }
