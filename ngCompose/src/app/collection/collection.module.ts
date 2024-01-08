import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CollectionRoutingModule } from "./collection-routing.module";
import { CollecHomeComponent } from "./collec-home/collec-home.component";
import { TableComponent } from "./table/table.component";
import { DividerComponent } from "../shared/divider/divider.component";
import { BiographiComponent } from "./biographi/biographi.component";
import { PartnersComponent } from "./partners/partners.component";
import { CompaniesComponent } from "./companies/companies.component";
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    CollecHomeComponent,
    TableComponent,
    BiographiComponent,
    PartnersComponent,
    CompaniesComponent,
    TabComponent,
  ],
  imports: [CommonModule, CollectionRoutingModule, DividerComponent],
})
export class CollectionModule {}
