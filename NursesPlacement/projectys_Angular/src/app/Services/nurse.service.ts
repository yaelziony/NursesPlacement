import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Nurse} from '../Models/nurse'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
                         
  url = 'https://localhost:44343/api/nurses';
  constructor(private http:HttpClient) {}
  insert(nurse:Nurse):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/insert',nurse)
  }
  getNurse(id_nurse:string):Observable<Nurse>
  {
    
    return this.http.get<Nurse>(this.url+'/getnurse/'+id_nurse)
  }
  getNurses():Observable<Nurse[]>
  {
    return this.http.get<Nurse[]>(this.url+'/getnurses')
  }
  getNursesbynamed(name:string):Observable<Nurse[]>
  {
    return this.http.get<Nurse[]>(this.url+'/getnursesbynamed/'+name)
  }
  //get name department
  
  getNameDepartment(id_nurse:string):Observable<string>
  {
    return this.http.get<string>(this.url+'/getdepartmentbynurse/'+id_nurse)
  }
  delete(nurse:Nurse):Observable<number>
  {
    return this.http.post<number>(this.url+'/deletenurse',nurse)
  }
  update(nurse:Nurse):Observable<number>
  {
    return this.http.post<number>(this.url+'/updatenurse',nurse)
  }
  countNursesInShift(id_nurse:string):Observable<number>
  {
    return this.http.get<number>(this.url+'/countnursesinshift/'+id_nurse)
  }
  getNursesByNameDepartment(name:string):Observable<Nurse[]>
  {
    return this.http.get<Nurse[]>(this.url+'/getnursesbynamedepartment/'+name)
  }
  




  // isExistNurse(id_nurse:string,password:string):Observable<number>
  // {
  //   return this.http.get<number>(this.http+'/isexistnurse/'+id_nurse+'/'+password)
  // }
  
}

