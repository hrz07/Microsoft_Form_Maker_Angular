import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormShowerService {

  isVisible: boolean = false;
  quesVisible: boolean = false;
  rankingVisible: boolean = false;



  toggleVisibility():void{
    this.isVisible = !this.isVisible;
  }

  quesVisibility():void{
    this.quesVisible = !this.quesVisible;
  }

  rankingVisibility():void{
    this.rankingVisible = !this.rankingVisible;
  }

  constructor() { }
}
