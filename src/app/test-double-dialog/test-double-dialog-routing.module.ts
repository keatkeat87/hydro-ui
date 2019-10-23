import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestDoubleDialogComponent } from './test-double-dialog.component';

const routes: Routes = [{ path: '', component: TestDoubleDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDoubleDialogRoutingModule { }
