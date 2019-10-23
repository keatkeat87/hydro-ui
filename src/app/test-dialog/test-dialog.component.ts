import { Component, OnInit, ViewChild, ViewContainerRef, Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef, OverlayContainer } from '@angular/cdk/overlay';
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
    private overlayContainer: OverlayContainer,
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
      .global();

    const overlayConfig = new OverlayConfig({
      width: '100%',
      height: '100%',
      panelClass: 'customOverlayPanelTransition',
      backdropClass: 'customBackdropClass',
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
    //     .right('50%');

    //   this.abc.updatePositionStrategy(positionStrategyA);
    // }, 1000);
  }




}
