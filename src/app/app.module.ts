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




@NgModule({
  declarations: [
    AppComponent,
    QinputComponent,
    HeadingInputsComponent,
    FooterButtonsComponent,
    AddOptionComponent,
    AddNewBtnComponent,
    HeaderComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
