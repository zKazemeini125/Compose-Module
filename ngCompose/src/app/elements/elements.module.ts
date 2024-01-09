import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ElementsRoutingModule } from "./elements-routing.module";
import { ElHomeComponent } from "./el-home/el-home.component";
import { PlaceholderComponent } from "./placeholder/placeholder.component";
import { RepeaterDirective } from "./repeater.directive";
import { SegmentComponent } from "./segment/segment.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ElHomeComponent,
    PlaceholderComponent,
    RepeaterDirective,
    SegmentComponent,
  ],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
})
export class ElementsModule {}
