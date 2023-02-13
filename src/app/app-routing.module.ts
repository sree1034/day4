import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/home/home/contacts/contacts/contacts.component';
import { DistrictsComponent } from './pages/home/home/districts/districts/districts.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/home/home/login/login/login.component';
import { SignupComponent } from './pages/home/home/signup/signup/signup.component';
import { SingledistrictComponent } from './singledistrict/singledistrict/singledistrict.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'districts',component:DistrictsComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:"single",component:SingledistrictComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
