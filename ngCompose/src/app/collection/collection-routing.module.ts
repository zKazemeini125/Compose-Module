import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollecHomeComponent } from './collec-home/collec-home.component';

const routes: Routes = [{ path: 'collection', component: CollecHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionRoutingModule {}
