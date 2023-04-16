import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormShowerService {

  isVisible: boolean = false;
  quesVisible: boolean = false;
  rankingVisible: boolean = false;
  isView:boolean = false;
  deletedID:any = ''


  toggleVisibility():void{
    // event.stopPropagation()
    this.isVisible = !this.isVisible;
  }

  quesVisibility():void{
    // event.stopPropagation()
    this.quesVisible = !this.quesVisible;
  }

  rankingVisibility():void{
    // event.stopPropagation()
    this.rankingVisible = !this.rankingVisible;
  }

  viewFunc(){
    this.isView = !this.isView
  }


  itemDeleteFunc(id:any){
    this.deletedID = id
  }


  constructor() { }
}
