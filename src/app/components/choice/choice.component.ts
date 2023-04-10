import { Component } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  favoriteSeason?: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer'];


  addOption() {
    this.seasons.push('hi')
  }

}
