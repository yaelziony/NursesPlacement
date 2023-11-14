import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nurse } from 'src/app/Models/nurse';
import { NursesInDepartment } from 'src/app/Models/nursesindepartment';
import { PostNursesInDepartment } from 'src/app/Models/PostNursesInDepartment';
import { DepartmentService } from 'src/app/Services/department.service';
import { LoginService } from 'src/app/Services/loginService';
import { NurseService } from 'src/app/Services/nurse.service';
import { NursesInDepartmentService } from 'src/app/Services/nurses-in-department.service';

@Component({
  selector: 'app-add-a-nurse',
  templateUrl: './add-a-nurse.component.html',
  styleUrls: ['./add-a-nurse.component.css']
})
export class AddANurseComponent implements OnInit {

  nameDepartment: string = ""
  nurse: Nurse = new Nurse
  //idD: number = 0
  nursesInD: PostNursesInDepartment = new PostNursesInDepartment
  isSucceedAddN: boolean = false
  isSucceedAddNInD: boolean = false
  arr: boolean[] = [false, false, false,false]
  constructor(private router: Router, private nurseService: NurseService, public loginService: LoginService, private nursesInDepartmentService: NursesInDepartmentService, private DepartmentService: DepartmentService) { }

  ngOnInit(): void {
    this.nurseService.getNameDepartment(this.loginService.idNurse).subscribe(n=>{(this.nameDepartment)=n;})
    this.nurse.N_id=""
    this.nurse.N_password=""
    this.nurse.N_tel=""
    this.nurse.N_status=""
  }
  check() {
    if (this.loginService.loginManager(this.loginService.idNurse).subscribe()) {
      if (this.nurse.N_id=="" || this.nurse.N_password=="" || this.nurse.N_tel=="") {
        if(this.nurse.N_id==""){
          this.arr[0]=true
          console.log(this.arr[0])
        }
        else
        this.arr[0]=false
        if(this.nurse.N_password==""){
          this.arr[1]=true
        }
        else
        this.arr[1]=false
        if(this.nurse.N_tel==""){
          this.arr[2]=true
        }
        else
        this.arr[2]=false 
        if(this.nurse.N_status==""){
          this.arr[3]=true
        }
        else
        this.arr[3]=false        
      }
      else {
        alert("else")
        if(this.nameDepartment=="maternity")
          this.nursesInD.department_name = "יולדות"
        else
        if(this.nameDepartment=="internal")
          this.nursesInD.department_name = "פנימית"
        alert(this.nursesInD.department_name)
        this.nursesInD.id_nurse = this.nurse.N_id
        console.log("department_name" + this.nursesInD.department_name)
        console.log("N_id" + this.nurse.N_id);
        this.nurseService.insert(this.nurse).subscribe(n => {
          (this.isSucceedAddN) = n;
          // alert("nurse"+this.nurse.N_firstName)
          console.log("isSucceedAddN:" + this.isSucceedAddN);
          if(this.isSucceedAddN){
          this.nursesInDepartmentService.insertNursesInDepartment(this.nursesInD).subscribe(nid => {
            (this.isSucceedAddNInD) = nid;
            console.log("isSucceedAddNInD:" + this.isSucceedAddNInD);
            if(this.isSucceedAddNInD){
              console.log("insert n in d")
            }
            else{
              console.log("no insert n in d")
            }
            })
          }
          else{
            console.log("no insert")
          }
        })
        console.log("insert")
      }
    } 
    else {
      alert(" !!! פעולה לא חוקית, אינך אחות")
    }

  }
}
