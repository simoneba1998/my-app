import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  currentComponent: string = 'component-one';
  constructor() {}

  ngOnInit(): void {
  }

  switchComponent(direction: string) {
    if (direction === 'next') {
      this.currentComponent =
        this.currentComponent === 'component-one'
          ? 'component-two'
          : 'component-one';
    } else {
      this.currentComponent =
        this.currentComponent === 'component-one'
          ? 'component-two'
          : 'component-one';
    }
  }
}
