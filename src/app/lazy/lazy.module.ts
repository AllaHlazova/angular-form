import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyComponent} from './test/lazy.component';
import {LazyRoutingModule} from './lazy-routing.module';
import {InfoComponent} from './info/info.component';
@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LazyComponent, InfoComponent]
})
export class LazyModule { }
