import {Directive, Input, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {
  @Input() public zoom: any;

  constructor(private element: ElementRef) {
  }

  @HostListener('mousedown', ['$event', '$target'])
  public preventMouse($event, $target) {
    $event.preventDefault();
    return false;
  }

  @HostListener('mousemove', ['$event'])
  public mouseMove($event) {
    if ($event.buttons) {
      this.element.nativeElement.scrollTop -= $event.movementY * 1.5;
      this.element.nativeElement.scrollLeft -= $event.movementX * 1.5;
    }
  }

}
