import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDoubleDialogRoutingModule } from './test-double-dialog-routing.module';
import { TestDoubleDialogComponent } from './test-double-dialog.component';


@NgModule({
  declarations: [TestDoubleDialogComponent],
  imports: [
    CommonModule,
    TestDoubleDialogRoutingModule
  ]
})
export class TestDoubleDialogModule { }
