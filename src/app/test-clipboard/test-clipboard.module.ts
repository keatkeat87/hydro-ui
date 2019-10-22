import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestClipboardRoutingModule } from './test-clipboard-routing.module';
import { TestClipboardComponent } from './test-clipboard.component';

@NgModule({
  declarations: [TestClipboardComponent],
  imports: [
    CommonModule,
    TestClipboardRoutingModule,
  ]
})
export class TestClipboardModule { }
