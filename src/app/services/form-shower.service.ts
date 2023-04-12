import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormShowerService {

  isVisible: boolean = false;
  quesVisible: boolean = false;
  rankingVisible: boolean = false;



  toggleVisibility():void{
    // event.stopPropagation()
    this.isVisible = !this.isVisible;
  }

  quesVisibility(event:Event):void{
    event.stopPropagation()
    this.quesVisible = !this.quesVisible;
  }

  rankingVisibility(event:Event):void{
    event.stopPropagation()
    this.rankingVisible = !this.rankingVisible;
  }

  constructor() { }
}
