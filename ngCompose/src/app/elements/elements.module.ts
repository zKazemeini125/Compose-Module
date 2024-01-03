import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElHomeComponent } from './el-home/el-home.component';

@NgModule({
  declarations: [ElHomeComponent],
  imports: [CommonModule, ElementsRoutingModule],
  exports: [ElHomeComponent],
})
export class ElementsModule {}
