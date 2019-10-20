import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestExpandRoutingModule } from './test-expand-routing.module';
import { TestExpandComponent } from './test-expand.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [TestExpandComponent],
  imports: [
    CommonModule,
    TestExpandRoutingModule,
    MatExpansionModule
  ]
})
export class TestExpandModule { }
