import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTableRoutingModule } from './test-table-routing.module';
import { TestTableComponent } from './test-table.component';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [TestTableComponent],
  imports: [
    CommonModule,
    TestTableRoutingModule,
    MatTableModule,
    MatSortModule,
    CdkTableModule,
  ]
})
export class TestTableModule { }
