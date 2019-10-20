import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestExpandRoutingModule } from './test-expand-routing.module';
import { TestExpandComponent } from './test-expand.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [TestExpandComponent],
  imports: [
    CommonModule,
    TestExpandRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TestExpandModule { }
