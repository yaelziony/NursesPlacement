import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import {Placement} from '../Models/placement'
import {PostPlacement} from '../Models/PostPlacement'


@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  url = 'https://localhost:44343/api/placement';

  placementInsert!:Placement

  constructor(private http:HttpClient) {}

    getAllPlacements():Observable<Placement[]>
    {
      return this.http.get<Placement[]>(this.http+'/getplacements')
    }

    insertPlacement(post_p:PostPlacement):Observable<boolean>
    {
      //צריך ליצור אוביקט אם צריך לשלוח יותר ממשתנה אחד
      return this.http.post<boolean>(this.url+'/insert',PostPlacement)
    }

    deletePlacement(post_p:PostPlacement):Observable<boolean>{

      return this.http.post<boolean>(this.url+'/delete',PostPlacement)
    }
    getPlacementsByNId(id_nurse:string):Observable<Placement[]>{

      return this.http.get<Placement[]>(this.url+'/placementsbynid'+id_nurse)
    }
    



//     onstructor(private http:HttpClient) { }
// insertClient(Client:Clients):Observable<number>
//  {
//  return this.http.post<number>(this.url+'/insertcli', Client)
//  }


}
