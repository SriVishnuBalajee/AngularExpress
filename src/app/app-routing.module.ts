import { NgModule } from '@angular/core';
import { RouterModule, Routes ,Navigation} from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'aboutus', component: AboutUsComponent },
    {path: 'contactus', component: ContactUsComponent},
    {path: 'Login', component: LoginComponent},
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents = [LoginComponent,AppComponent, AboutUsComponent, ContactUsComponent,HomeComponent];
  