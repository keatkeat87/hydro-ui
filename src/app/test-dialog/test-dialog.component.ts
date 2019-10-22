import { Component, OnInit, ViewChild } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent implements OnInit {

  constructor(
    public overlay: Overlay
  ) { }

  @ViewChild('template', { static: true }) template: TemplatePortal;

  abc: OverlayRef;

  ngOnInit() {
  }

  close() {
    this.abc.dispose();
  }

  click() {
    const positionStrategy = this.overlay.position()
      .global()
      .right();

    const overlayConfig = new OverlayConfig({
      width: '80%',
      height: '100%',
      backdropClass: 'customBackdropClass',
      panelClass: 'customOverlayPanelTransition',
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    this.abc = this.overlay.create(overlayConfig);

    this.abc.attach(this.template);

    // setTimeout(() => {
    //   const positionStrategyA = this.overlay.position()
    //     .global()
    //     .right('20%');

    //   this.abc.updatePositionStrategy(positionStrategyA);
    // }, 1000);
  }




}
