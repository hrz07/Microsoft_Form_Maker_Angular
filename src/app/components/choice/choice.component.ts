import { FormShowerService } from './../../services/form-shower.service';
import { Component,HostListener,ElementRef } from '@angular/core';
import { CdkDragDrop,moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css'],
})
export class ChoiceComponent {
  favoriteSeason?: string;
  seasons = ['Winter', 'Spring', 'Summer'];

  formShow: Boolean = false;


  onDrop(event: CdkDragDrop <string []>){
  moveItemInArray(
  event.container.data,
  event.previousIndex,
  event.currentIndex

)
  }




  formHandler(event: Event): void {
    event.stopPropagation();
    this.formShow = true;
  }

  addOption() {
    this.seasons.push('hi');
  }

  deleteFunc(i: number,event:Event) {
    event.stopPropagation()
    let newArr = this.seasons.filter((data, index) => index !== i);
    this.seasons = newArr;
  }



  constructor(private ele:ElementRef, public visibilityFunc: FormShowerService){
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
