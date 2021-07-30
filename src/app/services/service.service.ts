import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url='http://localhost:8003/patientlist';

  constructor(private httpClient:HttpClient) { 

  }

getPatientList():Observable<[]>{

  return this.httpClient.get<[]>(this.url)
  
}
searchPatient(name:string):Observable<[]>{
  const searchurl='http://localhost:8003/patientsearch';
const params=new HttpParams().set("name",name);
  return this.httpClient.get<[]>(searchurl,{params:params})
  
}
showReport(months:string):Observable<[]>{
  const reporturl='http://localhost:8003/search';
const params=new HttpParams().set("months",months);
  return this.httpClient.get<[]>(reporturl,{params:params})
  
}

statusReport(patientstatus:string,months:string):Observable<[]>{
  const reporturl='http://localhost:8003/patientlistreport';
const params=new HttpParams().set("patientstatus",patientstatus).set("months",months);
  return this.httpClient.get<[]>(reporturl,{params:params})
  
}


}
