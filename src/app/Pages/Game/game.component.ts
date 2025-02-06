import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Fireworks from 'fireworks-js';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit, AfterViewInit {
  @ViewChild('fireworksCanvas', { static: false }) fireworksCanvas?: ElementRef;
  currentComponent: string = 'component-one';

  private fireworks?: Fireworks;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.fireworksCanvas) {
      this.fireworks = new Fireworks(this.fireworksCanvas.nativeElement, {
        autoresize: true,
        opacity: 0.7,
      });
    }
  }

  ngOnInit(): void {}

  onChangeFireworks(status: string) {
    if (status == 'start') {
        this.fireworks?.start();
        setTimeout(() => {
          this.fireworks?.stop();
        }, 5000);
    } else if (status == 'stop') {
      this.fireworks?.stop();
    }
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
