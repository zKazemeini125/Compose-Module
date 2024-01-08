import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppViewsRoutingModule } from "./app-views-routing.module";
import { ViewHomeComponent } from "./view-home/view-home.component";
import { StatisticComponent } from "./statistic/statistic.component";
import { DividerComponent } from "../shared/divider/divider.component";
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [ViewHomeComponent, StatisticComponent, ItemListComponent],
  imports: [CommonModule, AppViewsRoutingModule, DividerComponent],
})
export class AppViewsModule {}
