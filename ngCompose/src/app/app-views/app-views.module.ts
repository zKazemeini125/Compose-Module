import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppViewsRoutingModule } from './app-views-routing.module';
import { ViewHomeComponent } from './view-home/view-home.component';

@NgModule({
  declarations: [ViewHomeComponent],
  imports: [CommonModule, AppViewsRoutingModule],
})
export class AppViewsModule {}
