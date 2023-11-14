import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nurse } from 'src/app/Models/nurse';
import { LoginService } from 'src/app/Services/loginService';
import { NurseService } from 'src/app/Services/nurse.service';
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],

})
export class PersonalInformationComponent implements OnInit {
  @ViewChild('myHtml1' ,{static:false})myHtmlRef1!:ElementRef;
  @ViewChild('myHtml2',{static:false}) myHtmlRef2!:ElementRef;
  @ViewChild('myHtml3',{static:false}) myHtmlRef3!:ElementRef;
  @ViewChild('myHtml4',{static:false}) myHtmlRef4!:ElementRef;
  @ViewChild('myHtml5',{static:false}) myHtmlRef5!:ElementRef;
  @ViewChild('myHtml6',{static:false}) myHtmlRef6!:ElementRef;
  @ViewChild('myHtml7',{static:false}) myHtmlRef7!:ElementRef;


  nurse:Nurse=new Nurse
  first_name:string="";
  last_name:string=""; 
  tel:string=""; 
  id:string=""; 
  email:string="";
  password:string="";
  role:string="";
  newNurse:Nurse=new Nurse
  constructor(private router:Router,private route:ActivatedRoute,private nurseService:NurseService,public loginService:LoginService, ) {
   }
  
  ngOnInit(): void {

  }
  ngAfterViewInit(){
    this.myHtmlRef1.nativeElement.value=this.nurseService.getNurse(this.loginService.idNurse).subscribe(a=>{(this.first_name)=a.N_firstName;})
    this.myHtmlRef2.nativeElement.value=this.nurseService.getNurse(this.loginService.idNurse).subscribe(a=>{(this.last_name)=a.N_lastName;})
    this.myHtmlRef3.nativeElement.value=this.nurseService.getNurse(this.loginService.idNurse).subscribe(a=>{(this.id)=a.N_id;})
    this.myHtmlRef4.nativeElement.value=this.nurseService.getNurse(this.loginService.idNurse).subscribe(a=>{(this.tel)=a.N_tel;})
    this.myHtmlRef5.nativeElement.value=this.nurseService.getNurse(this.loginService.idNurse).subscribe(a=>{(this.email)=a.N_email;})
    this.myHtmlRef6.nativeElement.value=this.nurseService.getNurse(this.loginService.idNurse).subscribe(a=>{(this.role)=a.N_status;})
    this.myHtmlRef7.nativeElement.value=this.nurseService.getNurse(this.loginService.idNurse).subscribe(a=>{(this.password)=a.N_password;})
   }
  change(){
    this.newNurse={N_id:this.id,N_password:this.password,N_firstName:this.first_name,N_lastName:this.last_name,N_tel:this.tel,N_email:this.email,N_status:this.role}
    this.nurseService.update(this.newNurse).subscribe()
  }


    // this.newNurse.N_id=this.id;
    // this.newNurse.N_password=this.password;
    // this.newNurse.N_firstName=this.first_name;
    // this.newNurse.N_lastName=this.last_name;
    // this.newNurse.N_tel=this.tel;
    // this.newNurse.N_email=this.email;
    // this.newNurse.N_status=this.role

  // informationNurse(){
  //   this.nurseService.getNurse(this.loginService.idNurse).subscribe(a=>{(this.nurse)=a;})
  //   this.nurse.N_firstName="555"
  // }
}
