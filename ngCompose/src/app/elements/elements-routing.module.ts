import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElHomeComponent } from './el-home/el-home.component';

const routes: Routes = [{ path: '', component: ElHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
