import { Component, HostListener, ElementRef } from '@angular/core';
import { FormShowerService } from 'src/app/services/form-shower.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent {
  label: number = 1;
  icon: string = 'star';
  ques: any = '';

  ratingList: any = [];

  foods: any[] = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' },
  ];

  formShow: Boolean = false;
  formHandler(event: Event): void {
    event.stopPropagation();
    this.formShow = true;
  }

  ratingPayload: any = {
    type: 'rating_btn',
    ques: '',
    icon: '',
    label: 0,
  };

  deleteOutPuts(id: any) {
    this.ratingList.splice(id, 1);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  constructor(
    private ele: ElementRef,
    public visibilityFunc: FormShowerService
  ) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.ele.nativeElement.contains(target)) {
      // this.formShow = !this.formShow;
      this.formShow = false;

      if (target.id === 'rating_btn' && this.ques !== '') {
        this.ratingPayload = {
          type: 'rating_btn',
          ques: this.ques,
          icon: this.icon,
          label: this.label,
        };

        this.ratingList.push(this.ratingPayload);

        this.label = 1;
        this.icon = 'star';
        this.ques = '';

        console.log(this.ratingList);


        let prevData = localStorage.getItem('allOutputs');
        if (prevData) {
          let x = JSON.parse(prevData);
          let newData = [...x, ...this.ratingList];
          let newdt = [...newData]
          console.log(newdt);
          localStorage.setItem('allOutputs', JSON.stringify(newdt));
        } else {
          localStorage.setItem(
            'allOutputs',
            JSON.stringify(this.ratingList)
          );
        }




      }
    }
  }
}
