import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CollecHomeComponent } from "./collec-home/collec-home.component";
import { BiographiComponent } from "./biographi/biographi.component";
import { CompaniesComponent } from "./companies/companies.component";
import { PartnersComponent } from "./partners/partners.component";

const routes: Routes = [
  {
    path: "",
    component: CollecHomeComponent,
    children: [
      { path: "", component: BiographiComponent },
      { path: "companies", component: CompaniesComponent },
      { path: "partners", component: PartnersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionRoutingModule {}
