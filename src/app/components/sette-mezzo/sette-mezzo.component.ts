import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Card {
  name: string;
  value: number;
}

@Component({
  selector: 'app-sette-mezzo',
  templateUrl: './sette-mezzo.component.html',
  styleUrls: ['./sette-mezzo.component.css']
})
export class SetteMezzoComponent implements OnInit {
  @Output() fireworks: EventEmitter<string> = new EventEmitter<string>();
  deck: Card[] = [];
  playerCards: Card[] = [];
  dealerCards: Card[] = [];
  playerScore = 0;
  dealerScore = 0;
  gameOver = false;
  message = '';

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.fireworks.emit('stop');
    this.gameOver = false;
    this.message = '';
    this.deck = this.createDeck();
    this.shuffleDeck();
    this.playerCards = [];
    this.dealerCards = [];
    this.playerScore = 0;
    this.dealerScore = 0;

    this.drawCard('player'); // Prima carta al giocatore
  }

  createDeck(): Card[] {
    const cards: Card[] = [];
    const names = ['1', '2', '3', '4', '5', '6', '7', 'J', 'Q', 'K'];

    names.forEach(name => {
      let value = parseInt(name) || 0.5; // Le figure valgono 0.5
      cards.push({ name, value });
    });

    return cards;
  }

  shuffleDeck() {
    this.deck.sort(() => Math.random() - 0.5);
  }

  drawCard(player: 'player' | 'dealer') {
    if (this.deck.length === 0) return;

    const card = this.deck.pop()!;

    if (player === 'player') {
      this.playerCards.push(card);
      this.playerScore += card.value;

      if (this.playerScore > 7.5) {
        this.message = '❌ You went over 7.5! Dealer wins!';
        this.gameOver = true;
      }
    } else {
      this.dealerCards.push(card);
      this.dealerScore += card.value;
    }
  }

  stand() {
    this.dealerTurn();
  }

  dealerTurn() {
    while (this.dealerScore < 5.5) {
      this.drawCard('dealer');
    }

    if (this.dealerScore > 7.5) {
      this.message = '🎉 Dealer went over 7.5! You win!';
      this.fireworks.emit('start');
    } else if (this.dealerScore >= this.playerScore) {
      this.message = '❌ Dealer wins!';
    } else {
      this.message = '🎉 You win!';
      this.fireworks.emit('start');
    }

    this.gameOver = true;
  }
}
