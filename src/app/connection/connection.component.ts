import { Component, OnInit } from '@angular/core';
 
import { ServiceService } from '../services/service.service';
 
@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  patients: any;
  status:boolean=false;
  reportstatus:boolean=false;
  name:string="";
  viewReport:boolean=false;
  reportstatusspecific:boolean=false;
  months="";
  patientstatus:string="";
  error=false;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    //this.getPatientDetails() ;
  }

  getPatientDetails = () => {
    this.error=false;
    this.reportstatusspecific=false;
    this.viewReport=false;
    this.reportstatus=false;
    this.service.getPatientList().subscribe((response) => {
      if(response.length<=0){
        this.error=true;
      }else{
        this.patients = response;
        this.status=true;
      }


    })
  }
 searchPatient = () => {  
  this.error=false;
  this.viewReport=false;
  this.reportstatus=false;
  this.status=false;
   if(this.name===""){
     alert("Please enter a name to search");
   }  else{
    

  this.reportstatusspecific=false;
    this.service.searchPatient(this.name).subscribe((response) => {
      if(response.length<=0){
        this.error=true;
      }else{
        this.patients = response;
        this.status=true;
      }
      
      

    })
  }
}
showReport = () => {  
  this.viewReport=true;
  this.status=false;
  this.reportstatusspecific=false;

}
report=()=>{
  this.error=false;
  this.reportstatusspecific=false;
  this.service.showReport(this.months).subscribe((response) => {
    if(response.length<=0){
      this.error=true;
    }else{
      this.patients = response;
      this.reportstatus=true;
    }
  
}
) 
}

statusreport=(patientstatus:string,months:string)=>{
  this.error=false;
  this.reportstatusspecific=true;
  this.viewReport=false;
  this.reportstatus=false;
  this.status=false;
  this.error=false;
  this.service.statusReport(patientstatus,months).subscribe((response) => {
    if(response.length<=0){
      this.error=true;
    }else{
      this.patients = response;
      this.reportstatusspecific=true;
    }

}
) 
}

}
