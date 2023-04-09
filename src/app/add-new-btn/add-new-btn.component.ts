import { Component } from '@angular/core';
import { ButtonHandlerService } from '../services/button-handler.service';

@Component({
  selector: 'app-add-new-btn',
  templateUrl: './add-new-btn.component.html',
  styleUrls: ['./add-new-btn.component.css']
})
export class AddNewBtnComponent {
  hide: boolean = false;

  hideHandler():void{
    this.hide = !this.hide;
  }

}
