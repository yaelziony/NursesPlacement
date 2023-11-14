import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Nurse } from 'src/app/Models/nurse';
import { LoginService } from 'src/app/Services/loginService';
import { NurseService } from 'src/app/Services/nurse.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @ViewChild('myHtml',{static:false})myHtmlRef!:ElementRef;
  arrNurses!:Nurse[]
  i:number=0
  x:string=""
  constructor(private nurseService:NurseService,public loginService:LoginService) { }


  ngOnInit(): void {
    this.myHtmlRef.nativeElement.value=this.nurseService.getNurses().subscribe(a=>{(this.arrNurses)=a;})

  }

}
