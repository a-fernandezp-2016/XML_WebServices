import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://photoshop-kopona.com/uploads/posts/2019-05/1559108923_0-2.jpg";
  public title:string = "Angular Course with Interpolation";
  constructor() { }

  ngOnInit(): void {
  }

}
