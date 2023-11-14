import {  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ,} from '@angular/core';//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { NurseHomeComponent } from './Components/nurse-home/nurse-home.component';
import { ManegerNurseHomeComponent } from './Components/maneger-nurse-home/maneger-nurse-home.component';
import { ContactsComponent } from './Components/ComponentsN/contacts/contacts.component';
import { PersonalInformationComponent } from './Components/ComponentsN/personal-information/personal-information.component';
import { AddANurseComponent } from './Components/ComponentsNM/add-a-nurse/add-a-nurse.component';
import { ShowPlacementComponent } from './Components/ComponentsN/show-placement/show-placement.component';
import { UpdatePlacementComponent } from './Components/ComponentsN/update-placement/update-placement.component';
import { HomeComponent } from './Components/ComponentsN/home/home.component';
import { LogoComponent } from './Components/logo/logo.component';
import { DeleteANurseComponent } from './Components/ComponentsNM/delete-a-nurse/delete-a-nurse.component';
import { SucceedToAddComponent } from './Components/succeed-to-add/succeed-to-add.component';
import { FormFieldPrefixSuffixExampleComponent } from './Components/form-field-prefix-suffix-example/form-field-prefix-suffix-example.component';


@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    NurseHomeComponent,
    ManegerNurseHomeComponent,
    ContactsComponent,
    PersonalInformationComponent,
    AddANurseComponent,
    ShowPlacementComponent,
    UpdatePlacementComponent,
    HomeComponent,
    LogoComponent,
    DeleteANurseComponent,
    SucceedToAddComponent,
    FormFieldPrefixSuffixExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  //
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
