import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTableRoutingModule } from './test-table-routing.module';
import { TestTableComponent } from './test-table.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [TestTableComponent],
  imports: [
    CommonModule,
    TestTableRoutingModule,
    MatTableModule
  ]
})
export class TestTableModule { }
