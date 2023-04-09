import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonHandlerService {

  hide: boolean = false;
  constructor() { 
  }

  hideHandler():void{
    this.hide = !this.hide;
  }
}
