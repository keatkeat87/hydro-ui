import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDialogRoutingModule } from './test-dialog-routing.module';
import { TestDialogComponent } from './test-dialog.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';


@NgModule({
  declarations: [TestDialogComponent],
  imports: [
    CommonModule,
    TestDialogRoutingModule,
    OverlayModule,
    PortalModule
  ]
})
export class TestDialogModule { }
