import { Component } from '@angular/core';

@Component({
  selector: 'app-all-out-put',
  templateUrl: './all-out-put.component.html',
  styleUrls: ['./all-out-put.component.css']
})
export class AllOutPutComponent {

   x:any = localStorage.getItem("allOutputs");
   y:any = JSON.parse(this.x)
}

// let x:any = localStorage.getItem("allOutputs");
// let y:any= JSON.parse(x)
// console.log(y);

// y?.forEach((element:any) => {
//   console.log(element);
// });


