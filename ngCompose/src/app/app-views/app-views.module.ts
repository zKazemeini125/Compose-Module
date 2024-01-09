import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppViewsRoutingModule } from "./app-views-routing.module";
import { ViewHomeComponent } from "./view-home/view-home.component";
import { StatisticComponent } from "./statistic/statistic.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ViewHomeComponent, StatisticComponent, ItemListComponent],
  imports: [CommonModule, AppViewsRoutingModule, SharedModule],
})
export class AppViewsModule {}
