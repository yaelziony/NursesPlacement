
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nurse } from 'src/app/Models/nurse';
import { LoginService } from 'src/app/Services/loginService';
import { NurseService } from 'src/app/Services/nurse.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
@ViewChild('myHtml',{static:false})myHtmlRef!:ElementRef;
  arrNurses!:Nurse[]
  i:number=0
  x:string=""
  nameDepartment:string=""
  
  constructor(private nurseService:NurseService,public loginService:LoginService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    //nameDepartment // לא מכיר כאן את ה  
    this.nurseService.getNameDepartment(this.loginService.idNurse).subscribe(d=>{(this.nameDepartment)=d;
    this.myHtmlRef.nativeElement.value=this.nurseService.getNursesByNameDepartment(this.nameDepartment).subscribe(a=>{(this.arrNurses)=a;})
    })
  }
}


