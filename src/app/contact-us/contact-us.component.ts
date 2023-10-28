import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { BackendserviceService } from '../backendservice.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  title = 'AngularExpress';
    detailsArray:any = [];
    enable: boolean = false;
    getuserarray:any = [];
    constructor(private http:HttpClient, private bservice:BackendserviceService){
  
    }
    getAllUsers(){
      this.detailsArray=this.bservice.getAllUsers();
    }
    addUser(uData:any){
     this.getuserarray=this.bservice.addUser(uData);
    }
     updateUser(uData:any){
        this.getuserarray=this.bservice.updateUser(uData);
      } 
    
    deleteUser(uData:any){
      this.getuserarray=this.bservice.deleteUser(uData);
    }

}
