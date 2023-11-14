import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Nurse} from '../Models/nurse'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  url = 'https://localhost:44343/api/nurse';
  constructor(private http:HttpClient) {}
  insert(nurse:Nurse):Observable<boolean>
  {
    return this.http.post<boolean>(this.http+'/insert',nurse)
  }
  getNurse(id:string):Observable<Nurse>
  {
    return this.http.get<Nurse>(this.http+'/getnurse/'+id)
  }
  getNurses():Observable<Nurse[]>
  {
    return this.http.get<Nurse[]>(this.http+'/getnurses')
  }
  getDepartment(id:string):Observable<string>
  {
    return this.http.get<string>(this.http+'/getdepartmentbynurse/'+id)
    
  }




  // isExistNurse(id_nurse:string,password:string):Observable<number>
  // {
  //   return this.http.get<number>(this.http+'/isexistnurse/'+id_nurse+'/'+password)
  // }
  
}

