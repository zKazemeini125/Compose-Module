import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModuleHomeComponent } from './module-home/module-home.component';


@NgModule({
  declarations: [
    ModuleHomeComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule
  ]
})
export class ModsModule { }
