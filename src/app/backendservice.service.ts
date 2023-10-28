import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Router,Route } from '@angular/router';
import { Navigation } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {
  detailsArray:any = [];
  data:any="";
  getuserarray:any=[];

  constructor(private http:HttpClient, private router:Router) {

  }
  getAllUsers(){
    this.http.get('http://localhost:9999/DisplayAllUser').subscribe((res)=>{
      this.detailsArray = res;
      console.log(this.detailsArray);
    });
    return this.detailsArray;
    
  }
  addUser(uData:any):any {
    this.http.post('http://localhost:9999/AddUser',uData.value).subscribe((res)=>{
      this.getuserarray = res;
      console.log(this.getuserarray);
    }); 
    return this.getuserarray;
  }
  updateUser(uData:any):any{
    this.http.put('http://localhost:9999/UpdateUser',uData.value).subscribe((res)=>{
      this.getuserarray = res;
      console.log(this.getuserarray);
  });
  return this.getuserarray;
}
deleteUser(uData:any):any{
  this.http.delete(`http://localhost:9999/DeleteUser?fname=${uData.value.fname}`).subscribe((res)=>{
    this.getuserarray = res;
    console.log(this.getuserarray);
  });
  return this.getuserarray;
 }
// login(lForm:any):any{
//   this.http.get(`http://localhost:9999/Login?id=${lForm.value.id}&pass=${lForm.value.pass}`).subscribe((res)=>{
//     this.data = res;
//     console.log(this.data);
//     if(this.data.length>0){
//       this.router.navigate(['/home']); 
//     }
//     else{
//       alert("Invalid Password");
//     }
    
//   });
 loginUser(lForm:any){
  this.http.get(`http://localhost:9990/loginUser?id=${lForm.value.id}&pass=${lForm.value.pass}`).subscribe((res)=>{
    this.data = res;
    console.log(this.data); 
  });
  return this.data;
 }
}
