import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElHomeComponent } from './el-home/el-home.component';
import { ElEnterComponent } from './el-enter/el-enter.component';

@NgModule({
  declarations: [ElHomeComponent, ElEnterComponent],
  imports: [CommonModule, ElementsRoutingModule],
})
export class ElementsModule {}
