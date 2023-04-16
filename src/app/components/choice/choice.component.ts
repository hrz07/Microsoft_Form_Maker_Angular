import { FormShowerService } from './../../services/form-shower.service';
import { Component, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css'],
})
export class ChoiceComponent implements OnDestroy {
  searchImageShown: boolean = true;
  favoriteSeason?: string;
  seasons = ['Winter', 'Spring', 'Summer'];
  newSeasons = [...this.seasons];
  ques: any = '';

  /* start and end with this value */

  formShow: Boolean = false;

  quesOptionList: any[] = [];
  choicePayload: any = {
    type: 'choice',
    ques: '',
    options: [...this.newSeasons],
  };

  ngOnDestroy(): void {}

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  formHandler(event: Event): void {
    event.stopPropagation();
    this.formShow = true;
  }

  addOption() {
    this.seasons.push('hi');
  }

  deleteFunc(i: number, event: Event) {
    event.stopPropagation();
    let newArr = this.seasons.filter((data, index) => index !== i);
    this.seasons = newArr;
  }

  deleteOutPuts(id: any) {
    this.quesOptionList.splice(id, 1);

    // localStorage.setItem(
    //   'allOutputs',
    //   JSON.stringify(this.quesOptionList)
    // );
  }

  constructor(
    private ele: ElementRef,
    public visibilityFunc: FormShowerService
  ) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!this.ele.nativeElement.contains(target)) {
      this.formShow = false;

      if (target.id === 'choice_button') {
        if (
          this.ques !== '' &&
          this.ques !==
            this.quesOptionList[this.quesOptionList.length - 1]?.ques
        ) {
          this.choicePayload.ques = this.ques;
          this.choicePayload.options = [...this.newSeasons];
          this.quesOptionList.push({
            ...this.choicePayload,
            options: [...this.choicePayload.options],
          });

          this.ques = '';
          this.newSeasons = [];

          let prevData = localStorage.getItem('allOutputs');
          if (prevData) {
            let x = JSON.parse(prevData);
            let newData = [...x, ...this.quesOptionList];
            let newdt = [...newData]
            localStorage.setItem('allOutputs', JSON.stringify(newdt));
          } else {
            localStorage.setItem(
              'allOutputs',
              JSON.stringify(this.quesOptionList)
            );
          }
        }
      }
    }
  }
}
