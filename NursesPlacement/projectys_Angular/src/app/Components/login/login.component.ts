import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers:[LoginService]
})
export class LoginComponent implements OnInit {
  
  password:string=''
  id_nurse:string=""
  isManager:boolean=false
  ans:number=0
  //כאן הוא מכיר!!!!
  constructor(public loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    //this.id_nurse=this.loginService.idNurse
  }

  check(){
    console.log("555"+this.id_nurse+" "+this.password)
    this.loginService.idNurse=this.id_nurse
    this.loginService.login(this.id_nurse,this.password).subscribe(a=>{
      (this.ans)=a;
    console.log("555"+this.id_nurse)

    if(this.ans>0){
      console.log("נמצא")
      this.loginService.loginManager(this.loginService.idNurse).subscribe(a=>{(this.isManager)=a;
        if(this.isManager){
          console.log("מנהל")
           this.router.navigate(['/homeM'])//ישלח לקומ' של אחראית מחלקה
        }
        else{
          alert("נמצא כאחות")
          this.router.navigate(['/homeN'])//ישלח לקומ' של אחות רגילה
        }
      })
    }
        else
        if(this.ans==0){
          alert('סיסמה שגויה')//סיסמה שגויה
          console.log("סיסמה שגויה")
        }
        else 
          alert("תעודת זהות שגויה ")
    });
  }
   checkIsisDepartmentManager(){
     alert("m2")
     this.loginService.loginManager(this.loginService.idNurse).subscribe(a=>{(this.isManager)=a;})
  }
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
