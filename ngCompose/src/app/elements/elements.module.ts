import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElHomeComponent } from './el-home/el-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { RepeaterDirective } from './repeater.directive';

@NgModule({
  declarations: [ElHomeComponent, PlaceholderComponent, RepeaterDirective],
  imports: [CommonModule, ElementsRoutingModule],
})
export class ElementsModule {}
