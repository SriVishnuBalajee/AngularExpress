import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { BackendserviceService } from '../backendservice.service';
import { NgIf } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import{ Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

data:any=[];
constructor(private http:HttpClient, private bservice:BackendserviceService,private router:Router){
  
}
login(lForm:any){
  this.data=this.bservice.loginUser(lForm); 
  console.log(this.data);
  if(this.data!= null){
    this.router.navigate(['/home']); 
  }
  else{
    alert("Invalid Password");
  }
}
}


 

