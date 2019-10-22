import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-test-expand',
  templateUrl: './test-expand.component.html',
  styleUrls: ['./test-expand.component.scss']
})
export class TestExpandComponent implements OnInit {

  constructor(
    private focusMonitor: FocusMonitor
  ) { }

  panelOpenState = false;

  @ViewChild('input', { static: true, read: ElementRef })
  inputElementRef: ElementRef<HTMLInputElement>;

  @ViewChild('target', { static: true, read: ElementRef })
  target: ElementRef<HTMLDivElement>;

  @ViewChild('dada', { static: true, read: MatExpansionPanel })
  item: MatExpansionPanel;

  @ViewChild('dada', { static: true, read: ElementRef })
  itemEl: ElementRef<HTMLDivElement>;

  focus() {
    console.log('focus');
  }
  click() {
    this.inputElementRef.nativeElement.focus();
  }

  ngOnInit() {
    this.focusMonitor.monitor(this.itemEl, true).subscribe(v => {
      if (v !== null) {
        this.item.open();
      }
    });
  }


}
