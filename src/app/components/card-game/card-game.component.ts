import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import Fireworks from 'fireworks-js';

interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {
  @Output() fireworks: EventEmitter<string> = new EventEmitter<string>();
  cards: Card[] = [];
  symbols: string[] = ['❤️', '🔷', '⭐', '🍀', '🎵', '🎲', '🎭', '⚽']; // Simboli delle carte
  flippedCards: Card[] = [];
  matchedPairs = 0;
  totalPairs = this.symbols.length;
  gameWon = false;


  ngOnInit() {
    this.initializeGame();
  }


  initializeGame() {
    this.fireworks.emit('stop');
    this.gameWon = false;
    this.matchedPairs = 0;
    this.cards = [];

    let cardValues = [...this.symbols, ...this.symbols]; // Duplicare i simboli per creare coppie
    cardValues = this.shuffleArray(cardValues); // Mischiare le carte

    this.cards = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false
    }));
  }

  shuffleArray(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  flipCard(card: Card) {
    if (card.isFlipped || card.isMatched || this.flippedCards.length === 2) {
      return;
    }

    card.isFlipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      setTimeout(() => this.checkForMatch(), 800);
    }
  }

  checkForMatch() {
    const [card1, card2] = this.flippedCards;

    if (card1.value === card2.value) {
      card1.isMatched = true;
      card2.isMatched = true;
      this.matchedPairs++;

      if (this.matchedPairs === this.totalPairs) {
        this.gameWon = true;
        this.fireworks.emit('start');
      }
    } else {
      card1.isFlipped = false;
      card2.isFlipped = false;
    }

    this.flippedCards = [];
  }
}
