import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Models/department';
import { Placement } from 'src/app/Models/placement';
import { PostPlacement } from 'src/app/Models/PostPlacement';
import { DepartmentService } from 'src/app/Services/department.service';
import { LoginService } from 'src/app/Services/loginService';
import { NurseService } from 'src/app/Services/nurse.service';
import { PlacementService } from 'src/app/Services/placement.service';

@Component({
  selector: 'app-update-placement',
  templateUrl: './update-placement.component.html',
  styleUrls: ['./update-placement.component.css']
})
export class UpdatePlacementComponent implements OnInit {
  p:number=0
  np:PostPlacement=new PostPlacement()
  shiftS:string=""
  countShiftsNow:number=0//כמות משמרות לשבוע לאחות
  countNursesInShift:number=0//כמות משמרות למחלקה זו למשמרת
  nameDepartment:string=""
 @ViewChild('myHtml',{static:false})myHtmlRef!:ElementRef;

  departmentByIdNurse:Department=new Department()//להכניס לפפי הלוגין LOGIN

  cntShifts:number=0
  
  arrIsplacemented:boolean[][]=[[false,false,false,false,false,false,false],
                                 [false,false,false,false,false,false,false],
                                 [false,false,false,false,false,false,false]]//מערך לכל הכפתורים אלו כפתורים האחות בחרה כבר
  arrplacement!:Placement[]//לאחות נוכחית מערך השיבוצים הקיימים
  allPlacements!:Placement[]//מערך המשמרות
  matCountPlacement:number[][]=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]//מערך כמות האחיות למשמרת
  
  constructor(private departmentService:DepartmentService,private placementService:PlacementService,private nurseService:NurseService,public loginService:LoginService) { }

  ngOnInit(): void {
    this.placementService.getAllPlacements().subscribe(a=>{(this.allPlacements)=a;})
    this.nurseService.getNameDepartment(this.loginService.idNurse).subscribe(d=>{(this.nameDepartment)=d;
    this.departmentService.getDepartmentObj(this.nameDepartment).subscribe(o=>{(this.departmentByIdNurse)=o;})
    })
  }

  ngAfterViewInit(){
    this.placementToTable()
    this.allplacementToTable()
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

  allplacementToTable(){

    for(let i in this.allPlacements){
      if(this.allPlacements[i].P_shift=='בןקר'){
      if(this.allPlacements[i].P_day==0)
        this.matCountPlacement[0][0]++;
      if(this.allPlacements[i].P_day==1)
        this.matCountPlacement[0][1]++;
      if(this.allPlacements[i].P_day==2&&this.allPlacements[i].P_shift=='בןקר')
        this.matCountPlacement[0][2]++;
      if(this.allPlacements[i].P_day==3&&this.allPlacements[i].P_shift=='בןקר')
        this.matCountPlacement[0][3]++;
      if(this.allPlacements[i].P_day==4&&this.allPlacements[i].P_shift=='בןקר')
        this.matCountPlacement[0][4]++;
      if(this.allPlacements[i].P_day==5&&this.allPlacements[i].P_shift=='בןקר')
        this.matCountPlacement[0][5]++;
      if(this.allPlacements[i].P_day==6&&this.allPlacements[i].P_shift=='בןקר')
        this.matCountPlacement[0][6]++;
    }
  if(this.allPlacements[i].P_shift=='צהריים'){
      if(this.allPlacements[i].P_day==0)
        this.matCountPlacement[1][0]++;
      if(this.allPlacements[i].P_day==1)
        this.matCountPlacement[1][1]++;
      if(this.allPlacements[i].P_day==2)
        this.matCountPlacement[1][2]++;
      if(this.allPlacements[i].P_day==3)
        this.matCountPlacement[1][3]++;
      if(this.allPlacements[i].P_day==4)
        this.matCountPlacement[1][4]++;
      if(this.allPlacements[i].P_day==5)
        this.matCountPlacement[1][5]++;
      if(this.allPlacements[i].P_day==6)
        this.matCountPlacement[1][6]++;
      }
      
  if(this.allPlacements[i].P_shift=='ערב')
  {     
      if(this.allPlacements[i].P_day==0)
        this.matCountPlacement[2][0]++;
      if(this.allPlacements[i].P_day==1)
        this.matCountPlacement[2][1]++;
      if(this.allPlacements[i].P_day==2)
        this.matCountPlacement[2][2]++;
      if(this.allPlacements[i].P_day==3)
        this.matCountPlacement[2][3]++;
      if(this.allPlacements[i].P_day==4)
        this.matCountPlacement[2][4]++;
      if(this.allPlacements[i].P_day==5)
        this.matCountPlacement[2][5]++;
      if(this.allPlacements[i].P_day==6)
        this.matCountPlacement[2][6]++;
  }    
        
    }
  }


  updatePlacementToTable(shift:number,day:number){//להוסיף שיבוץ או להוריד שיבוץ
    if(shift==0){
      this.shiftS="בוקר"
    }
    if(shift==1){
      this.shiftS="ערב"
    }
    if(shift==2){
      this.shiftS="לילה"
    }
    this.np={id_nurse:this.loginService.idNurse,day:day,shift:this.shiftS}

    if(this.arrIsplacemented[shift][day]==true){

      this.arrIsplacemented[shift][day]=false
      this.matCountPlacement[shift][day]--
      this.placementService.deletePlacement(this.np).subscribe()
      this.countShiftsNow--
    }
    else{//==false
        for(let x=0;x<3;x++){
          if(this.arrIsplacemented[x][day]==true){
            console.log("נבחרה משמרת באותו יום ,"+"בחרי ביום אחר")
            //alert("נבחרה משמרת באותו יום ,"+"בחרי ביום אחר")
            return ;
          }
        }
        this.cntShifts=(21*this.departmentByIdNurse.D_countNursesInShift)/(this.departmentByIdNurse.D_countNursesInDep)
        if((this.countShiftsNow+1)<=this.cntShifts && this.matCountPlacement[shift][day]<this.departmentByIdNurse.D_countNursesInShift)  
        {
          this.arrIsplacemented[shift][day]=true
          this.matCountPlacement[shift][day]++
          this.countShiftsNow++
          this.placementService.insertPlacement(this.np).subscribe()//חובה subscribe()
        }    
      }
      console.log(this.matCountPlacement[shift][day])
  }
 

  getColor(shift:number,day:number){
    if(this.arrIsplacemented[shift][day]==true)
      return 'green'
   else{
      return 'white'
   }
  }
}

// placementToTable(){//העברת השיבוצים לטבלה באנגולר
//   this.placementService.getPlacementsByNId(this.loginService.idNurse).subscribe(a=>{(this.arrplacement)=a;})
//   for(this.p;this.p<this.arrplacement.length;this.p++){
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
// } 
