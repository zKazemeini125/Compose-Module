import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiceHomeComponent } from "./service-home/service-home.component";

const routes: Routes = [
  {
    path: "",
    component: ServiceHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
