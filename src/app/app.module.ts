import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { QinputComponent } from './utilities/qinput/qinput.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeadingInputsComponent } from './utilities/heading-inputs/heading-inputs.component';
import { FooterButtonsComponent } from './utilities/footer-buttons/footer-buttons.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddOptionComponent } from './utilities/add-option/add-option.component';
import { AddNewBtnComponent } from './add-new-btn/add-new-btn.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NavbarComponent } from './navbar/navbar.component';
import { ChoiceComponent } from './components/choice/choice.component';
import {MatRadioModule} from '@angular/material/radio';
import { QuestionComponent } from './components/question/question.component';
import { RankingComponent } from './components/ranking/ranking.component';
import {MatSelectModule} from '@angular/material/select';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
  declarations: [
    AppComponent,
    QinputComponent,
    HeadingInputsComponent,
    FooterButtonsComponent,
    AddOptionComponent,
    AddNewBtnComponent,
    HeaderComponent,
    ToolbarComponent,
    NavbarComponent,
    ChoiceComponent,
    QuestionComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatTooltipModule,
    FormsModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule,
    DragDropModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
