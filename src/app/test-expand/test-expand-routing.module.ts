import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestExpandComponent } from './test-expand.component';

const routes: Routes = [{ path: '', component: TestExpandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestExpandRoutingModule { }
