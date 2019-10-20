import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test-expand',
  templateUrl: './test-expand.component.html',
  styleUrls: ['./test-expand.component.scss']
})
export class TestExpandComponent implements OnInit {

  constructor() { }

  panelOpenState = false;

  @ViewChild('input', { static: true, read: ElementRef })
  inputElementRef: ElementRef<HTMLInputElement>;

  click() {
    this.inputElementRef.nativeElement.focus();
  }

  ngOnInit() {
  }


}
