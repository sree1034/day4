import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent {
 constructor (private hero :HeroService,private router:Router){}
   districts=this.hero.getData()
   gotoHere(id:any)
   {
     localStorage.setItem('id',id)
     this.router.navigate(['/single'])
   }
   
  }

