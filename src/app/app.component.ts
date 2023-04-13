import { Component } from '@angular/core';
import { FormShowerService } from './services/form-shower.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microsoftFormAngular';
  isView = true;

  viewFunc(){
    this.isView = !this.isView
  }

  constructor(public viewService: FormShowerService){

  }
}
