import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-expand',
  templateUrl: './test-expand.component.html',
  styleUrls: ['./test-expand.component.scss']
})
export class TestExpandComponent implements OnInit {

  constructor() { }

  panelOpenState = false;

  ngOnInit() {
  }

}
