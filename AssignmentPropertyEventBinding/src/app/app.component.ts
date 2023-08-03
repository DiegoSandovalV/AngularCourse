import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentPropertyEventBinding';

  odds: number[] = [];
  evens: number[] = [];

  onNewNumber(number: number) {
    if(number % 2 === 0) {
      this.evens.push(number);
    }else {
      this.odds.push(number);
    }
  }
}
