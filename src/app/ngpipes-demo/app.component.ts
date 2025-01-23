import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'ng-pipes-demo';
  presentDate = new Date(); //variables holding the current date
  time$ = interval(1000).pipe(map(() => new Date()));
  testObject = {
  name: 'Abby Dizon',
  age: 21,
  food:" Cheesecake"
  }
  price: number = 20000;

  Fruits = ["Apple",  "Orange",  "Grapes",  "Mango",  "Kiwi",  "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  Population: number = 0.81; 
  Ph: number = 0.155; 
}


