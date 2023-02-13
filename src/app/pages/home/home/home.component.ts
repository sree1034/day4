import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  database=[
    {
      "image":"https://wallpapercave.com/wp/5rSrctm.jpg"
    },
    {
      "image":"https://www.imltravel.com/wp-content/uploads/2017/02/Golden-triangle-tour-with-kerala-and-goa-1920x1080-8.jpg"
    },
    {
      "image":"https://irisholidays.com/keralatourism/wp-content/uploads/2021/10/kerala-tour-plan-1.jpg"
    }
  ]

}
