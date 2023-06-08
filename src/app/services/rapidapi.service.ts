import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

   rapidApiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete';
   crikbuzUrl = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
   headersYahoo = new HttpHeaders({
    'X-RapidAPI-Key': '94bdac15bamsh69a55261d957c7ep109e8bjsn522d537dfbbf',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
   })

   headersCricBuz = new HttpHeaders({
   'X-RapidAPI-Key': '94bdac15bamsh69a55261d957c7ep109e8bjsn522d537dfbbf',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
   })
   constructor(private httpClient: HttpClient) { }

  getDataYahooFinance() : Observable<any>  {
    let params = new HttpParams();
    params = params.append('q','tesla');
    params = params.append('region','US');
   return this.httpClient.get(this.rapidApiUrl, { headers: this.headersYahoo,params: params})
  }
  getCricBuzData() : Observable<any>  {
   return this.httpClient.get(this.crikbuzUrl, { headers: this.headersCricBuz})
  }
}