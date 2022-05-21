import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  title:string;
  subtitle:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Mi primer App ANGULAR';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {

     this.ArregloTarjetas = [
      {title:'Video 1', subtitle: 'Subtitle Video 1', image:"https://i.ytimg.com/vi/PSD5pFi6bx4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRXrJxTLALTsBas1djapMjtW0lQg"},
      {title:'Video 2', subtitle: 'Subtitle Video 2', image:"https://i.ytimg.com/vi/rOsd3OI9dOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdMDLcELCLzlSzVoELr-QZ41mL8g"},
      {title:'Video 3', subtitle: 'Subtitle Video 3', image:"https://i.ytimg.com/vi/lasGrvRYBWg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgh8fipV-k2f4xjEEPpvvtiWHwjA"},
     ]

  }
}
