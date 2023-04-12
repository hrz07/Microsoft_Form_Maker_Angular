import { FormShowerService } from './../../services/form-shower.service';
import { Component, HostListener, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css'],
})
export class ChoiceComponent {
  searchImageShown: boolean = true;
  favoriteSeason?: string;
  seasons = ['Winter', 'Spring', 'Summer'];
  newSeasons = [...this.seasons];
  ques: any = '';

  formShow: Boolean = false;

  quesOptionList: any[] = [];
  choicePayload: any = {
    type: 'choice',
    ques: '',
    options: [...this.newSeasons],
  };

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
        if (this.ques !== '' && this.ques !== this.quesOptionList[this.quesOptionList.length-1]?.ques) {
          this.choicePayload.ques = this.ques;
          this.choicePayload.options = [...this.newSeasons];
          this.quesOptionList.push({
            ...this.choicePayload,
            options: [...this.choicePayload.options],
          });

          localStorage.setItem(
            'allOutputs',
            JSON.stringify(this.quesOptionList)
          );
          console.log(this.quesOptionList);
        }
      }
    }
  }
}
