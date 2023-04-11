import { Component,HostListener,ElementRef } from '@angular/core';
import { FormShowerService } from 'src/app/services/form-shower.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  formShow:Boolean = false
  formHandler(event: Event): void {
    event.stopPropagation();
    this.formShow = true;
  }
  constructor(private ele:ElementRef,public visibilityFunc: FormShowerService){
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
