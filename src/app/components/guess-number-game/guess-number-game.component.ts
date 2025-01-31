import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Fireworks } from 'fireworks-js';

@Component({
  selector: 'app-guess-number-game',
  templateUrl: './guess-number-game.component.html',
  styleUrls: ['./guess-number-game.component.css'],
})
export class GuessNumberGameComponent implements OnInit, AfterViewInit {
  @ViewChild('fireworksCanvas', { static: false }) fireworksCanvas?: ElementRef;
  numeroSegreto: number = Math.floor(Math.random() * 100) + 1;
  numeroInserito? = new FormControl(null, [Validators.required]);
  messaggio: string = '';
  coloreMessaggio: string = 'black';
  vincita: boolean = false;

  private fireworks?: Fireworks;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.fireworksCanvas) {
      this.fireworks = new Fireworks(this.fireworksCanvas.nativeElement, {
        autoresize: true,
        opacity: 0.7
      });
    }
  }

  checkNumber() {
    if (isNaN(this.numeroInserito?.value)) {
      this.messaggio = 'Inserisci un numero valido!';
      this.coloreMessaggio = 'orange';
      return;
    }

    if (this.numeroInserito?.value === this.numeroSegreto) {
      this.fireworks?.start();
      setTimeout(() => {
        this.fireworks?.stop();
      }, 5000);
      this.messaggio = '🎉 Complimenti! Hai indovinato!';
      this.vincita = true;
      this.coloreMessaggio = 'green';
    } else if (this.numeroInserito?.value > this.numeroSegreto) {
      this.messaggio = '📉 Troppo alto! Riprova.';
      this.coloreMessaggio = 'red';
    } else {
      this.messaggio = '📈 Troppo basso! Riprova.';
      this.coloreMessaggio = 'red';
    }
  }

  restartGame() {
    this.vincita = false;
    this.fireworks?.stop();
    this.numeroInserito?.setValue(undefined);
    this.numeroSegreto = Math.floor(Math.random() * 100) + 1;
  }
}
