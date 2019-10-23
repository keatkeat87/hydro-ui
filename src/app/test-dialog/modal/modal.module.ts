import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { AComponent } from '../a/a.component';
import { BComponent } from '../b/b.component';



@NgModule({
  declarations: [ModalComponent, AComponent, BComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [ModalComponent]
})
export class ModalModule { }
