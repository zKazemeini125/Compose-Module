import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleHomeComponent } from './module-home/module-home.component';

const routes: Routes = [{ path: 'modules', component: ModuleHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModsRoutingModule {}
