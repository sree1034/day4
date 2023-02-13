import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { DistrictsComponent } from './pages/home/home/districts/districts/districts.component';
import { SignupComponent } from './pages/home/home/signup/signup/signup.component';
import { ContactsComponent } from './pages/home/home/contacts/contacts/contacts.component';
import { NavbarComponent } from './utils/navbar/navbar/navbar.component';
import { FooterComponent } from './utils/navbar/navbar/footer/footer/footer.component';
import { SingledistrictComponent } from './singledistrict/singledistrict/singledistrict.component';
import { LoginComponent } from './pages/home/home/login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictsComponent,
    SignupComponent,
    ContactsComponent,
    NavbarComponent,
    FooterComponent,
    SingledistrictComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
