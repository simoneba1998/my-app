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

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.fireworksCanvas) {
      this.fireworks = new Fireworks(this.fireworksCanvas.nativeElement, {
        autoresize: true,
        opacity: 0.7,
      });
    }
  }

  // Metodo per gestire l'attivazione dei fireworks
  onChangeFireworks(status: string) {
    if (status === 'start') {
      this.fireworks?.start();
      setTimeout(() => {
        this.fireworks?.stop();
      }, 5000);
    } else if (status === 'stop') {
      this.fireworks?.stop();
    }
  }

  // Metodo per cambiare componente. Puoi differenziare la logica in base alla direzione se necessario.
  switchComponent(direction: string) {
    this.currentComponent =
      this.currentComponent === 'component-one'
        ? 'component-two'
        : 'component-one';
  }

  // Metodo chiamato sullo swipe verso sinistra (corrisponde al "next")
  onSwipeLeft() {
    this.switchComponent('next');
  }

  // Metodo chiamato sullo swipe verso destra (corrisponde al "prev")
  onSwipeRight() {
    this.switchComponent('prev');
  }
}
