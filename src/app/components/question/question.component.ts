import { Component,HostListener,ElementRef } from '@angular/core';
import { FormShowerService } from 'src/app/services/form-shower.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  formShow:Boolean = false
  value: any = ''
  example:any = []
  quesList: any = []
 
  textPayload: any = {
    type: 'text_btn',
    ques: '',
  };





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

      if(target.id==='text_btn' && this.value !== ''){
        this.textPayload = {
          type: 'text_btn',
          ques: this.value,
        };
        
        this.quesList.push(this.textPayload);
        this.example.push(this.value)
        this.value = '';


        let prevData = localStorage.getItem('allOutputs');
        if (prevData) {
          let x = JSON.parse(prevData);
          let newData = [...x, ...this.quesList];
          let newdt = [...newData]
          console.log(newdt);
          localStorage.setItem('allOutputs', JSON.stringify(newdt));
        } else {
          localStorage.setItem(
            'allOutputs',
            JSON.stringify(this.quesList)
          );
        }
      }
      }
      
    }
  }

