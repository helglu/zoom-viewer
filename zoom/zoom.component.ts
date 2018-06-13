import {Component, Input, OnInit} from '@angular/core';
import {ZoomDirective} from "./zoom.directive";

@Component({
  selector: 'zoom',
  template: require('./zoom.html'),
  directives: [ZoomDirective]
})
export class ZoomComponent implements OnInit {

  @Input() src: string;
  @Input() width: string = '150px';
  @Input() height: string = '150px';

  imageWidth: string = '150px';
  imageHeight: string = '150px';

  imageRotateValue: number = 0;
  imageRotate: string = 'rotate(0deg)';

  ngOnInit() {
    this.imageWidth = this.width;
    this.imageHeight = this.height;
  }

  zoomin() {
    let newWidth = (parseInt(this.imageWidth) * 2);
    let parentWidthMultiple = parseInt(this.width) * 10;

    if (newWidth >= parentWidthMultiple) {
      newWidth = parentWidthMultiple;
    }

    this.imageWidth = newWidth + 'px';
  }

  zoomout() {
    let newWidth = (parseInt(this.imageWidth) / 2);
    let parentWidth = parseInt(this.width);
    if (newWidth <= parentWidth) {
      newWidth = parentWidth;
    }
    this.imageWidth = newWidth + 'px';
  }

  rotate(direction: string) {
    if (direction === '+') {
      this.imageRotateValue += 90;
    } else {
      this.imageRotateValue -= 90;
    }
    if (this.imageRotateValue < 0) {
      this.imageRotateValue = 270;
    }
    if (this.imageRotateValue >= 360) {
      this.imageRotateValue = 0;
    }

    this.imageRotate = 'rotate(' + this.imageRotateValue + 'deg)';
  }

  reset() {
    this.imageWidth = this.width;
    this.imageHeight = this.height;
    this.imageRotate = 'rotate(0deg)';
  }
}

