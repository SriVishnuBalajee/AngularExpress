import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BackendserviceService } from '.././backendservice.service';
import {RouterLink,Router} from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
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
  

