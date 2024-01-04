import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollecHomeComponent } from './collec-home/collec-home.component';

@NgModule({
  declarations: [CollecHomeComponent],
  imports: [CommonModule, CollectionRoutingModule],
})
export class CollectionModule {}
