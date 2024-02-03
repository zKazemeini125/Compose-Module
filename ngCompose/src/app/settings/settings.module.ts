import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingHomeComponent } from './setting-home/setting-home.component';


@NgModule({
  declarations: [
    SettingHomeComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
