import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './Components/ComponentsN/contacts/contacts.component';
import { HomeComponent } from './Components/ComponentsN/home/home.component';
import { PersonalInformationComponent } from './Components/ComponentsN/personal-information/personal-information.component';
import { ShowPlacementComponent } from './Components/ComponentsN/show-placement/show-placement.component';
import { UpdatePlacementComponent } from './Components/ComponentsN/update-placement/update-placement.component';
import { LoginComponent } from './Components/login/login.component';
import { ManegerNurseHomeComponent } from './Components/maneger-nurse-home/maneger-nurse-home.component';
import { NurseHomeComponent } from './Components/nurse-home/nurse-home.component';
import { SucceedToAddComponent } from './Components/succeed-to-add/succeed-to-add.component';

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'homeM',component:ManegerNurseHomeComponent},
{path:'homeN',component:NurseHomeComponent},
{path:'contacts',component:ContactsComponent},
{path:'pINurse',component:PersonalInformationComponent},
{path:'showP',component:ShowPlacementComponent},
{path:'updateP',component:UpdatePlacementComponent},
{path:'home',component:HomeComponent},
{path:'succeedAdd',component:SucceedToAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
