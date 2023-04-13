import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { FormShowerService } from '../services/form-shower.service';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  asyncTabs: Observable<ExampleTab[]>;

  constructor(public viewService: FormShowerService ) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Questions', content: ''},
          {label: 'Responses', content: ''},
        ]);
      }, 1000);
    });
  }
}
