import { Component } from '@angular/core';
import { ButtonHandlerService } from '../services/button-handler.service';
import { FormShowerService } from '../services/form-shower.service';

@Component({
  selector: 'app-add-new-btn',
  templateUrl: './add-new-btn.component.html',
  styleUrls: ['./add-new-btn.component.css']
})
export class AddNewBtnComponent {
  hide: boolean = false;

  hideHandler(event:Event):void{
    event.stopPropagation()
    this.hide = !this.hide;
  }


  constructor(public visibilityFunc :FormShowerService){
   
  }

}
