import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ManegerNurseHomeComponent } from './Components/maneger-nurse-home/maneger-nurse-home.component';
import { NurseHomeComponent } from './Components/nurse-home/nurse-home.component';

const routes: Routes = [{path:'login/:id',component:LoginComponent},
{path:'homeM',component:ManegerNurseHomeComponent},
{path:'home',component:NurseHomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
