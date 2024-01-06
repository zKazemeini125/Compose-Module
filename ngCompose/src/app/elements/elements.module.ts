import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElHomeComponent } from './el-home/el-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { RepeaterDirective } from './repeater.directive';
import { DividerComponent } from '../shared/divider/divider.component';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [ElHomeComponent, PlaceholderComponent, RepeaterDirective, SegmentComponent],
  imports: [CommonModule, ElementsRoutingModule, DividerComponent],
})
export class ElementsModule {}
