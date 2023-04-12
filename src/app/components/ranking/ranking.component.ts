import { Component,HostListener,ElementRef } from '@angular/core';
import { FormShowerService } from 'src/app/services/form-shower.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  label:number = 1;
  icon:string= 'star';
  ques:any =''

  foods:any[] = [
    {value: 1, viewValue: '1'},
    {value: 2, viewValue: '2'},
    {value: 3, viewValue: '3'},
    {value: 4, viewValue: '4'},
    {value: 5, viewValue: '5'},
  ];

  formShow:Boolean = false
  formHandler(event: Event): void {
    event.stopPropagation();
    this.formShow = true;
  }
  constructor(private ele:ElementRef,  public visibilityFunc: FormShowerService ){
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.ele.nativeElement.contains(target)) {
      // this.formShow = !this.formShow;
      this.formShow = false;
    }
  }
}
