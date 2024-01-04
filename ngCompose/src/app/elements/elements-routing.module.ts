import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElHomeComponent } from './el-home/el-home.component';
import { ElEnterComponent } from './el-enter/el-enter.component';

const routes: Routes = [
  { path: 'element', component: ElHomeComponent },
  { path: 'element-two', component: ElEnterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
