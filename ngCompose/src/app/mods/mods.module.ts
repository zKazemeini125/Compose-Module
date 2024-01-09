import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModsRoutingModule } from "./mods-routing.module";
import { ModuleHomeComponent } from "./module-home/module-home.component";
import { ModalComponent } from "./modal/modal.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ModuleHomeComponent, ModalComponent],
  imports: [CommonModule, ModsRoutingModule, SharedModule],
})
export class ModsModule {}
