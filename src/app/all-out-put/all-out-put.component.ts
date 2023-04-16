import { Component } from '@angular/core';

@Component({
  selector: 'app-all-out-put',
  templateUrl: './all-out-put.component.html',
  styleUrls: ['./all-out-put.component.css']
})
export class AllOutPutComponent {

   x:any = localStorage.getItem("allOutputs");
   y:any = JSON.parse(this.x)

   headerData:any = localStorage.getItem("my-data");
   ParseHeader:any= JSON.parse(this.headerData);

  // title:any = this.headerData?.title;
  // desc:any= this.headerData?.desc;


  constructor(){
 
  }

}




