import {Injectable} from '@angular/core';

@Injectable()
export class CompareService {

  public documentViewUrls: Array<string> = ['',''];
  public lastSetIndex = 1;

  constructor() {
  }

  setImage(url: string) {
    if(this.lastSetIndex === 0){
      this.lastSetIndex = 1;
      this.documentViewUrls[this.lastSetIndex] = url;
      console.log('compare: second image updated'); //TODO
    }else{
      this.lastSetIndex = 0;
      this.documentViewUrls[this.lastSetIndex] = url;
      console.log('compare: first image updated'); //TODO
    }
  }
}
