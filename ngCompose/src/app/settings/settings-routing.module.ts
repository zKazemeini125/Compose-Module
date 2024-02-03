import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettingHomeComponent } from "./setting-home/setting-home.component";

const routes: Routes = [{ path: "", component: SettingHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
