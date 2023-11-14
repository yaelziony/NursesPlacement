import { Component, OnInit } from '@angular/core';
import { Nurse } from 'src/app/Models/nurse';
import { LoginService } from 'src/app/Services/loginService';
import { NurseService } from 'src/app/Services/nurse.service';
import { NursesInDepartmentService } from 'src/app/Services/nurses-in-department.service';
@Component({
  selector: 'app-delete-a-nurse',
  templateUrl: './delete-a-nurse.component.html',
  styleUrls: ['./delete-a-nurse.component.scss']
})
export class DeleteANurseComponent implements OnInit {

  constructor(private nursesindepartmentservice: NursesInDepartmentService, private nurseService: NurseService, public loginService: LoginService) { }

  textNurseExist:boolean=false
  textNurseNoExist:boolean=false
  nurse: Nurse = new Nurse
  id_nurse: string = ""
  nurseExists: number = 0// 1=הצליח למחוק
                         // 0= לא קיים  
  nurseInDExists: number = 0//
  ngOnInit(): void {
  }
  check() {
    if (this.loginService.loginManager(this.loginService.idNurse)) {
      // console.log(this.id_nurse)
      this.nurseService.getNurse(this.id_nurse).subscribe(a => {
        (this.nurse) = a;
        if(this.nurse!=null){
        this.nursesindepartmentservice.deleteNursesInDepartment(this.id_nurse).subscribe(a => {
          (this.nurseInDExists) = a;
          if (this.nurseInDExists == 1) {
            console.log("delete in :" + this.id_nurse)
            this.nurseService.delete(this.nurse).subscribe(a => {
              (this.nurseExists) = a;
              if (this.nurseExists == 0) {
                console.log("לא קייים")
              } else {
                if (this.nurseExists == -1) {
                  console.log("תקלה")
                } else {
                  console.log("ונמחק קייים")
                  this.textNurseExist=true
                }
              }
            })
          }
          else {
            console.log("in לא קייים")
          }
        })
      }
      else{
        console.log("לא קיים במערכת")
        this.textNurseExist=false
        this.textNurseNoExist=true
      }
      })
    } else
      alert(" !!! פעולה לא חוקית, אינך אחות")
  }
}


