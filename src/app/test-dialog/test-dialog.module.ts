import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDialogRoutingModule } from './test-dialog-routing.module';
import { TestDialogComponent } from './test-dialog.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ModalModule } from './modal/modal.module';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';


@NgModule({
  declarations: [TestDialogComponent, AComponent, BComponent],
  imports: [
    CommonModule,
    TestDialogRoutingModule,
    OverlayModule,
    PortalModule,
    ModalModule
  ]
})
export class TestDialogModule { }
