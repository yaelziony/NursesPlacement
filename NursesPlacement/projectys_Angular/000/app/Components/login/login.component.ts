
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  idNurse:string=''
  password:string=''
  isManager!:boolean
  ans:number=0

  constructor(private logService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  
  check(){
    this.logService.login(this.idNurse,this.password).subscribe(a=>{(this.ans)=a;
    if(this.ans>0){
      if(this.checkIsisDepartmentManager()){
        this.router.navigate(['/app-maneger-nurse-home/'+this.idNurse])//ישלח לקומ' של אחראית מחלקה
      }
      else{
        this.router.navigate(['/app-nurse-home/'+this.idNurse])//ישלח לקומ' של אחות רגילה
      }
    }
    else
      if(this.ans==0){
        alert('סיסמה שגויה')//סיסמה שגויה
      }
      else
        alert("תעודת זהות שגויה ")
    })
  }
  checkIsisDepartmentManager(){
    return this.logService.loginManeger(this.idNurse).subscribe(a=>{(this.isManager)=a;})
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
