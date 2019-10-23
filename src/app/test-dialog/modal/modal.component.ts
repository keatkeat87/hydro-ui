import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('slideContent', [
      state('void, leave', style({ transform: 'translateX(100%)' })),
      state('enter, origin', style({ transform: 'none' })),
      state('move', style({ transform: 'translateX(-25%)' })),

      transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ])
  ],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[@slideContent]': 'animationState',
    // '(@dialogContainer.start)': '_onAnimationStart($event)',
    // '(@dialogContainer.done)': '_onAnimationDone($event)',
  },
})
export class ModalComponent implements OnInit {

  constructor() { }
  animationState: any;

  ngOnInit() {

  }

  click() {
    this.animationState = 'move';
  }
  click1() {
    this.animationState = 'origin';
  }

}
