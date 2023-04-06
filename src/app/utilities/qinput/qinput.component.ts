import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Header } from 'src/app/models/header.model';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-qinput',
  templateUrl: './qinput.component.html',
  styleUrls: ['./qinput.component.css']
})
export class QinputComponent {

  @Input() searchImageShown: boolean = true;
  @Input() value: string = ''

  @Output() newValue = new EventEmitter<string>();

  constructor(){
    
  }

  addValue(newvalue: string) {
    this.newValue.emit(newvalue);
  }

}
