import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string;
  public Titulo:string = "Curso de Angular con Interpolación";
  constructor() { }

  ngOnInit(): void {
  }

}
