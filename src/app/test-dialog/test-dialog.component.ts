import { Component, OnInit, ViewChild, ViewContainerRef, Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent implements OnInit {

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
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
    const component =  new ComponentPortal(ModalComponent, this.viewContainerRef, this.injector);
    const componentRef = this.abc.attach(component);
    console.warn(componentRef);

    // setTimeout(() => {
    //   const positionStrategyA = this.overlay.position()
    //     .global()
    //     .right('20%');

    //   this.abc.updatePositionStrategy(positionStrategyA);
    // }, 1000);
  }




}
