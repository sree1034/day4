import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singledistrict',
  templateUrl: './singledistrict.component.html',
  styleUrls: ['./singledistrict.component.css']
})
export class SingledistrictComponent {
  single: any;
  constructor(private District:HeroService){}

  ngOnInit():void{
    let pageid=localStorage.getItem('id');
    let num = Number(pageid);
    
    let singleDataArray=this.District.getData();

    this.single=singleDataArray.filter(d => d.id === num)
    console.log(this.single);
  }

}
