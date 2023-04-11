import { Component,HostListener,ElementRef } from '@angular/core';
import { Header } from 'src/app/models/header.model';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  formShow: Boolean = true;
  headerData:Header={
    title: '',
    desc:''
  }
shoow = true

  formHandler(event: Event):void{
    event.stopPropagation()
    // this.formShow = !this.formShow;
    this.formShow = false;
  }

  constructor(private data:HelperService, private ele:ElementRef){
    this.headerData = data.header;
  }

  addNewTitle(newvalue: string) {
    this.headerData.title = newvalue;
  }

  addNewDesc(newvalue: string) {
    this.headerData.desc = newvalue;
  }
@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent){
  const target = event.target as HTMLElement;
  if(!this.ele.nativeElement.contains(target))
  {
    // this.formShow = !this.formShow;
    this.formShow = true;
  }
}
}
