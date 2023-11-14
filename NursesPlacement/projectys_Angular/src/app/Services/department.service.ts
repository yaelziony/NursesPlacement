import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Department} from '../Models/department'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url = 'https://localhost:44343/api/department';

  constructor(private http:HttpClient) { }

  //אותם משתנים /אותם אוביקטים אותו דבר כולל אותיות גדולות

  
  getDepartmentObj(name:string):Observable<Department>
  {
    return this.http.get<Department>(this.url+'/getdepartment/'+name)
  }

  getAllDepartments():Observable<Department[]>
  {
    return this.http.get<Department[]>(this.url+'/getdepartments')
  }
  DIdByDname(name:string):Observable<number>
  {
    return this.http.get<number>(this.url+'/didbydname/'+name)
  }
}
