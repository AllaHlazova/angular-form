import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyComponent} from './test/lazy.component';
import {LazyRoutingModule} from './lazy-routing.module';
import {InfoComponent} from './info/info.component';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {InfoUserComponent} from './info/info-user/info-user.component';
import {MatDividerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatListModule,
    HttpClientModule,
    MatDividerModule,
],
  exports: [ MatListModule],
  declarations: [LazyComponent, InfoComponent, InfoUserComponent]
})
export class LazyModule { }
