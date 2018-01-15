
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {UrlFormComponent} from './components/urlForm/urlForm.component'
import {ContentComponent} from './content/content.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,ReactiveFormsModule ],
  declarations: [AppComponent,UrlFormComponent,ContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }