import { Component, OnInit } from '@angular/core';
import { Nurse } from 'src/app/Models/nurse';
import { LoginService } from 'src/app/Services/loginService';
import { NurseService } from 'src/app/Services/nurse.service';
import { PlacementService } from 'src/app/Services/placement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameDepartment:string='null'
  nurseObj:Nurse=new Nurse
  constructor(public loginService:LoginService,private placmentService:PlacementService,private nurseService:NurseService) { }

  ngOnInit(): void {
    this.nurseService.getNameDepartment(this.loginService.idNurse).subscribe(a=>{(this.nameDepartment)=a;})
    this.nurseService.getNurse(this.loginService.idNurse).subscribe(a=>{(this.nurseObj)=a;})
  }

}
