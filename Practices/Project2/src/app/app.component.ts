import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Huge Project 2022';
  constructor(){
    setInterval(() => this.title='Small Project 2022', 3000)
  }

  getSuma(num1: number, num2: number)
  {
    return num1 + num2;
  }

}
