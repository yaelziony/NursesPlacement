import { Component, OnInit } from '@angular/core';
import { Nurse } from 'src/app/Models/nurse';
import { LoginService } from 'src/app/Services/loginService';
import { NurseService } from 'src/app/Services/nurse.service';
import { PlacementService } from 'src/app/Services/placement.service';

@Component({
  selector: 'app-nurse-home',
  templateUrl: './nurse-home.component.html',
  styleUrls: ['./nurse-home.component.css']
})
export class NurseHomeComponent implements OnInit {
  isProfile:boolean=false
  nameDepartment:string='null'
  nurseObj:Nurse=new Nurse()
  arr:boolean[]=[false,true,false,false,false,false]
  constructor(private nurseService:NurseService,public loginService:LoginService) { 
 
  }
  ngOnInit(): void {
    this.nurseService.getNameDepartment(this.loginService.idNurse).subscribe(a=>{(this.nameDepartment)=a;})
    this.nurseService.getNurse(this.loginService.idNurse).subscribe(a=>{(this.nurseObj)=a;}) 
  }

  chageIndx(i:number)
  {
    this.arr[0]=false
    this.arr[2]=false
    this.arr[3]=false
    this.arr[1]=false
    this.arr[4]=false
    this.arr[i]=true
    if(i==1){
      this.isProfile=false
    }
    else{
      this.isProfile=true
    }
  }
}
