import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ServicesRoutingModule } from "./services-routing.module";
import { ServiceHomeComponent } from "./service-home/service-home.component";
import { SharedModule } from "../shared/shared.module";
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PageListComponent } from './page-list/page-list.component';

@NgModule({
  declarations: [ServiceHomeComponent, SearchbarComponent, PageListComponent],
  imports: [CommonModule, ServicesRoutingModule, SharedModule],
})
export class ServicesModule {}
