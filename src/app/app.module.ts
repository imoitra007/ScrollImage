import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Component Declaration
import { AppComponent } from './app.component';
import { ImgcontainerComponent } from './imgcontainer/imgcontainer.component';
import { ImglistcontainerComponent } from './imglistcontainer/imglistcontainer.component';

// Service Declaration
import {AppService} from './app.service';
import { CommaPipe } from './Pipes/comma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImgcontainerComponent,
    ImglistcontainerComponent,
    CommaPipe
 
  ],
  imports: [
    BrowserModule, CommonModule, HttpClientModule, HttpClientJsonpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }