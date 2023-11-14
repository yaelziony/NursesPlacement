import { Component, OnInit } from '@angular/core';
import { Nurse } from 'src/app/Models/nurse';
import { LoginService } from 'src/app/Services/loginService';
import { NurseService } from 'src/app/Services/nurse.service';
import { PlacementService } from 'src/app/Services/placement.service';

@Component({
  selector: 'app-maneger-nurse-home',
  templateUrl: './maneger-nurse-home.component.html',
  styleUrls: ['./maneger-nurse-home.component.css']
})
export class ManegerNurseHomeComponent implements OnInit {

  
  isProfile:boolean=false
  nameDepartment:string='null'
  nurseObj:Nurse=new Nurse
  arr:boolean[]=[false,true,false,false,false,false,false,false]//

  constructor(public loginService:LoginService,private placmentService:PlacementService,private nurseService:NurseService) { }

  ngOnInit(): void {
    this.nurseService.getNameDepartment(this.loginService.idNurse).subscribe(a=>{(this.nameDepartment)=a;})
    this.nurseService.getNurse(this.loginService.idNurse).subscribe(a=>{(this.nurseObj)=a;})
    this.nameDepartment="mamager"
  }
  chageIndx(i:number)
  {
    this.arr[0]=false
    this.arr[2]=false
    this.arr[3]=false
    this.arr[1]=false
    this.arr[4]=false
    this.arr[5]=false
    this.arr[6]=false
    this.arr[7]=false//succeed to add
    this.arr[i]=true
    if(i==1){
      this.isProfile=false
    }
    else{
      this.isProfile=true
    }

  }
}

