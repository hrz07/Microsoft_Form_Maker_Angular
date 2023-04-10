import { Component } from '@angular/core';
import { Header } from 'src/app/models/header.model';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  formShow: Boolean = false;
  headerData:Header={
    title: '',
    desc:''
  }

  formHandler():void{
    this.formShow = !this.formShow;
  }

  constructor(private data:HelperService){
    this.headerData = data.header;
  }

  addNewTitle(newvalue: string) {
    this.headerData.title = newvalue;
  }

  addNewDesc(newvalue: string) {
    this.headerData.desc = newvalue;
  }

}
