import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('slideContent', [
      state('void', style({ transform: 'translate(100%, 0)' })),
      state('enter', style({ transform: 'none' })),
      state('leave', style({ transform: 'translate(-100%, 0)' })),
      transition('* => *', animate('2000ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
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

  ngOnInit() {

  }

}
