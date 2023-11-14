import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { NurseHomeComponent } from './Components/nurse-home/nurse-home.component';
import { ManegerNurseHomeComponent } from './Components/maneger-nurse-home/maneger-nurse-home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NurseHomeComponent,
    ManegerNurseHomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
