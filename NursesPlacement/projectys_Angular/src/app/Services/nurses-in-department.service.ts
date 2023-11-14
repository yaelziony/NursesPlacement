import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PostNursesInDepartment} from '../Models/PostNursesInDepartment'
@Injectable({
  providedIn: 'root'
})
export class NursesInDepartmentService {
  url = 'https://localhost:44343/api/nursesindepartment';

  constructor(private http:HttpClient) {}
  insertNursesInDepartment(post_nid:PostNursesInDepartment):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/insert',post_nid)
  }
  updateNursesInDepartment(post:PostNursesInDepartment):Observable<number>
  {
    return this.http.post<number>(this.url+'/update',post)
  }
  deleteNursesInDepartment(id_nurse:string):Observable<number>
  {
    return this.http.get<number>(this.url+'/delete/'+id_nurse)
  }
}

