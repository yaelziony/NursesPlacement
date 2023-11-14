import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nurse } from 'src/app/Models/nurse';
import { Placement } from 'src/app/Models/placement';
import { NurseService } from 'src/app/Services/nurse.service';
import { PlacementService } from 'src/app/Services/placement.service';

@Component({
  selector: 'app-nurse-home',
  templateUrl: './nurse-home.component.html',
  styleUrls: ['./nurse-home.component.css']
})
export class NurseHomeComponent implements OnInit {

  idNurse:string='8785'
  nameDepartment:string='null'
  nurseObj!:Nurse
  arrPlacement!:Placement[]

  constructor(private router:Router,private route:ActivatedRoute,private nurseService:NurseService,private placmentService:PlacementService) { 
    this.route.params.subscribe(
      params=>{
        this.idNurse=params['id'];
      }
    )
  }
  ngOnInit(): void {
  }
  nameD(){
    this.nurseService.getDepartment(this.idNurse).subscribe(a=>{(this.nameDepartment)=a;})
  }
  nameNurse(){
    this.nurseService.getNurse(this.idNurse).subscribe(a=>{(this.nurseObj)=a;})
  }
  //להעביר לקומפוננטה שתביא לאחו ת אתהשיבוצים שלה
  placementsbynid(){
    this.placmentService.getPlacementsByNId(this.idNurse).subscribe(a=>{(this.arrPlacement)=a;})
  }


}
