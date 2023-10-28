import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BackendserviceService } from './backendservice.service';
import {RouterLink,Router} from '@angular/router';
import { Navigation,NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  show:boolean=false;
  
   ngOnInit(){
     this.router.navigate(['/Login']);
     this.router.events.subscribe((event)=>{
        if(event instanceof NavigationEnd){
         const url = event.url;
         if(url=='/Login'){
           this.show=true;
         }
         else{
           this.show=false;
         }

        }
     })
   }
   ngOnDestroy(){
     this.router.navigate(['Login']);
   }
 
   Logout(){
     this.router.navigate(['Login']);
   }

}
