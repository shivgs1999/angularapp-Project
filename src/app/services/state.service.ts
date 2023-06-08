import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  edit(formData: any) {
    throw new Error('Method not implemented.');
  }
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
  baseUrl = 'http://awsmaster.mahamining.com/master';
  stateUrl = 'http://awsmaster.mahamining.com/master/states/GetState';

  divisionUrl = 'http://awsmaster.mahamining.com/master/divisions/';

  districtUrl =
    'http://awsmaster.mahamining.com/master/districts/GetDistrictByDivisionId?UserId=1&DivisionId=';

  talukaUrl =
    'http://awsmaster.mahamining.com/master/talukas/GetTalukaByDistrictId/';

  villageUrl =
    'http://awsmaster.mahamining.com/master/villages/GetVillagesByCriteria/';
  constructor(private httpClient: HttpClient) { }

  getState() {
    return this.httpClient.get(this.stateUrl);
  }


  getDivision(id: any) {
    return this.httpClient.get(this.divisionUrl + id);
  }

  getdistrict(id: any) {
    return this.httpClient.get(this.districtUrl + id);
  }

  getTaluka(id: any) {
    return this.httpClient.get(this.talukaUrl + id);
  }

  getVillage(id: any) {
    return this.httpClient.get(this.villageUrl + id);
  }
  list() {
    return this.httpClient.get(`${this.stateUrl}`);
  }
  deleteState(id: any) {
    const url = `${this.stateUrl}/${id}`;
    return this.httpClient.delete(url);
  }

}