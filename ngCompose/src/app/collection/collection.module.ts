import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollecHomeComponent } from './collec-home/collec-home.component';
import { TableComponent } from './table/table.component';
import { DividerComponent } from '../shared/divider/divider.component';

@NgModule({
  declarations: [CollecHomeComponent, TableComponent],
  imports: [CommonModule, CollectionRoutingModule, DividerComponent],
})
export class CollectionModule {}
