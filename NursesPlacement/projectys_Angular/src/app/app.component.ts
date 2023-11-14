import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Services/loginService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectys';
  password:string=''
  id_nurse:string=""
  isManager:boolean=false
  ans:number=0
  flag1:boolean=true
  constructor(public loginService:LoginService,private router:Router) { }
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
    this.flag1=false
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

}
