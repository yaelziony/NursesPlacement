import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Placement } from 'src/app/Models/placement';
import { LoginService } from 'src/app/Services/loginService';
import { PlacementService } from 'src/app/Services/placement.service';

@Component({
  selector: 'app-show-placement',
  templateUrl: './show-placement.component.html',
  styleUrls: ['./show-placement.component.css']
})
export class ShowPlacementComponent implements OnInit {
  @ViewChild('myHtml',{static:false})myHtmlRef!:ElementRef;

  color:string=''
  shift2:string=""
  arrplacement!:Placement[]//לאחות נוכחית מערך השיבוצים הקיימים
  countShiftsNow:number=0//כמות משמרות לשבוע לאחות

  arrIsplacemented:boolean[][]=[[false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false]]

  constructor(private router:Router,private route:ActivatedRoute,private placementService:PlacementService,public loginService:LoginService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
    this.placementToTable()
  }
  placementToTable(){//העברת השיבוצים לטבלה באנגולר
    this.placementService.getPlacementsByNId(this.loginService.idNurse).subscribe(a=>{(this.arrplacement)=a;
    for(let p in this.arrplacement){
                           //this.p
      if(this.arrplacement[p].P_shift=="בוקר"){
        this.arrIsplacemented[0][this.arrplacement[p].P_day]=true
        this.countShiftsNow++
      }
      if(this.arrplacement[p].P_shift=="ערב"){
        this.arrIsplacemented[1][this.arrplacement[p].P_day]=true
        this.countShiftsNow++
      }
      if(this.arrplacement[p].P_shift=="לילה"){
        this.arrIsplacemented[2][this.arrplacement[p].P_day]=true
        this.countShiftsNow++
      }
    }
  })//
  } 
  // placementToTable(){//העברת השיבוצים לטבלה באנגולר
  //   this.placementService.getPlacementsByNId(this.loginService.idNurse).subscribe(a=>{(this.arrplacement)=a;
  //   for(let p in this.arrplacement){
  //     if(this.arrplacement[this.p].P_shift=="בוקר"){
  //       this.arrIsplacemented[0][this.arrplacement[this.p].P_day]=true
  //       this.countShiftsNow++
  //     }
  //     if(this.arrplacement[this.p].P_shift=="ערב"){
  //       this.arrIsplacemented[1][this.arrplacement[this.p].P_day]=true
  //       this.countShiftsNow++
  //     }
  //     if(this.arrplacement[this.p].P_shift=="לילה"){
  //       this.arrIsplacemented[2][this.arrplacement[this.p].P_day]=true
  //       this.countShiftsNow++
  //     }
  //   }
  // })//
  // } 
 
  getColor(shift:number,day:number){
    if(this.arrIsplacemented[shift][day]==true)
      return 'green'
   else{
      return 'white'
   }
  }
}