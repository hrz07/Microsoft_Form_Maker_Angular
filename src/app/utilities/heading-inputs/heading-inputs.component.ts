import { Component } from '@angular/core';
import { FormShowerService } from 'src/app/services/form-shower.service';

@Component({
  selector: 'app-heading-inputs',
  templateUrl: './heading-inputs.component.html',
  styleUrls: ['./heading-inputs.component.css']
})

export class HeadingInputsComponent {
  constructor(public FormShowerService: FormShowerService){

  }
}
