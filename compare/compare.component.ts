import {Component, Input, OnInit} from '@angular/core';
import {CompareService} from "./compare.service";
import {ZoomComponent} from "../../components/zoom/zoom.component";
import {FormService} from "../../form/form.service"

var _ = require('lodash');

@Component({
  selector: 'compare-component',
  templateUrl: './compare.template.html',
  styleUrls: ['./compare.style.css'],
  providers: [CompareService],
  directives: [ZoomComponent]
})

export class CompareComponent implements OnInit{

  @Input() documentCategories: Array<string> = [];
  public documentUrls = [];
  private noImageUrl = '/assets/img/no-image-found.gif';


  constructor(private compareService: CompareService,
              private formService: FormService) {
  }

  ngOnInit() {

    console.log ('compare init');
    if (this.documentCategories.length > 0) {
      this.documentUrls = this.formService.getDocumentUrls(this.documentCategories);
    }

    console.log ('document urls', this.documentUrls);

    //sets default images to compare if Input documentUrls length 0 or 1
    if(this.documentUrls.length === 0) {
      this.compareService.setImage(this.noImageUrl);
      this.compareService.setImage(this.noImageUrl);
    }else if(this.documentUrls.length === 1) {
      this.compareService.setImage(this.documentUrls[0]);
      this.compareService.setImage(this.noImageUrl);
    }else {
      this.compareService.setImage(this.documentUrls[0]);
      this.compareService.setImage(this.documentUrls[1]);
    }
  };
}
