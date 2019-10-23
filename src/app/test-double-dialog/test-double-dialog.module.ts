import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDoubleDialogRoutingModule } from './test-double-dialog-routing.module';
import { TestDoubleDialogComponent, DialogDataExampleDialog } from './test-double-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [TestDoubleDialogComponent, DialogDataExampleDialog],
  imports: [
    CommonModule,
    TestDoubleDialogRoutingModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogDataExampleDialog
  ]
})
export class TestDoubleDialogModule { }
