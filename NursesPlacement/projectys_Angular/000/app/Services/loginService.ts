import { HttpClient } from "@angular/common/http";
import { stringify } from "@angular/compiler/src/util";
import { Observable } from "rxjs";

export class LoginService{
    url='https://localhost:44343/api/nurses'
    constructor(private http:HttpClient){}

    login(user:string,password:string):Observable<number>{
        return this.http.get<number>(this.url+'/login/'+user+'/'+password)
    }
    
    loginManeger(user:string):Observable<boolean>{
        return this.http.get<boolean>(this.url+'/loginismaneger/'+user)
    }
}
