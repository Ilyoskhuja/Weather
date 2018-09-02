import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { FormsModule,FormBuilder,ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from  '@angular/http';
import { ReadComponent } from './read/read.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadComponent,
 
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
   
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
