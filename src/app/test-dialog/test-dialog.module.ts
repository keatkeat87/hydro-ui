import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDialogRoutingModule } from './test-dialog-routing.module';
import { TestDialogComponent } from './test-dialog.component';


@NgModule({
  declarations: [TestDialogComponent],
  imports: [
    CommonModule,
    TestDialogRoutingModule
  ]
})
export class TestDialogModule { }
