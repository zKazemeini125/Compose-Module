import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppViewsRoutingModule } from './app-views-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppViewsRoutingModule
  ]
})
export class AppViewsModule { }
