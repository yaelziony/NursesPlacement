import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { stringify } from "@angular/compiler/src/util";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class LoginService{

    idNurse:string=""

    url='https://localhost:44343/api/nurses'

    constructor(private http:HttpClient){}

    login(id_nurse:string,password:string):Observable<number>{
        return this.http.get<number>(this.url+'/login/'+id_nurse+'/'+password)
    }
    loginManager(id_nurse:string):Observable<boolean>{
        return this.http.get<boolean>(this.url+'/loginismaneger/'+id_nurse)
    }
}
