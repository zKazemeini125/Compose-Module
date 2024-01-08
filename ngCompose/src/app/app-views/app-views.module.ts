import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppViewsRoutingModule } from './app-views-routing.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { StatisticComponent } from './statistic/statistic.component';

@NgModule({
  declarations: [ViewHomeComponent, StatisticComponent],
  imports: [CommonModule, AppViewsRoutingModule],
})
export class AppViewsModule {}
