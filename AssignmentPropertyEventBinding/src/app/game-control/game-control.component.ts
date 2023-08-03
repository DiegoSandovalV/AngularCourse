import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() newNumber = new EventEmitter<number>();
  interval:any;

  number: number = 0;

  updateNumber() {
    this.newNumber.emit(this.number);
    this.number++;
  }

  onStartGame() {
    this.interval = setInterval(() => this.updateNumber(), 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
    // this.number = 0;
  }
}
