import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CricketinfoService {
  url='https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881'
  constructor(private http:HttpClient) { }
header=new HttpHeaders({
  'X-RapidAPI-Key': 'fea103a448msh80dc340112ddfb0p1e3c67jsne5b4b874c112',
  'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
})
 


getInfo():Observable<any>{
  return this.http.get(this.url,{headers:this.header})

}

}