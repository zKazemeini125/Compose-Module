import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElHomeComponent } from './el-home/el-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [ElHomeComponent, PlaceholderComponent],
  imports: [CommonModule, ElementsRoutingModule],
})
export class ElementsModule {}
