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
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    //this.getPatientDetails() ;
  }

  getPatientDetails = () => {
    this.viewReport=false;
    this.reportstatus=false;
    this.status=true;
    this.service.getPatientList().subscribe((response) => {
      this.patients = response;
      console.log(response);


    })
  }
 searchPatient = () => {  
  this.viewReport=false;
  this.reportstatus=false;
  this.status=false;
   if(this.name===""){
     alert("Please enter a name to search");
   }  else{
  this.status=true;
  this.reportstatusspecific=false;
    this.service.searchPatient(this.name).subscribe((response) => {
      this.patients = response;
      

    })
  }
}
showReport = () => {  
  this.viewReport=true;
  this.status=false;
  this.reportstatusspecific=false;

}
report=()=>{
  this.reportstatus=true;
  this.reportstatusspecific=false;
  this.service.showReport(this.months).subscribe((response) => {
    this.patients = response; 
  
}
) 
}

statusreport=(patientstatus:string)=>{
  this.reportstatusspecific=true;
  this.viewReport=false;
  this.reportstatus=false;
  this.status=false;
  this.service.statusReport(patientstatus).subscribe((response) => {
    this.patients = response; 
  console.log(this.patients);
}
) 
}

}
