import { Component, OnInit } from '@angular/core';
import { DeckVariableService } from '../services/deck-variable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matchmaking',
  templateUrl: './matchmaking.component.html',
  styleUrls: ['./matchmaking.component.css']
})
export class MatchmakingComponent implements OnInit {
  jugador = "Jugador"
  rango = "Rango"
  deck:any;
  countdown: number = 20;

  constructor(private deckvar: DeckVariableService, private router: Router) { }

  ngOnInit(): void {
    this.deckvar.selectedDeck.subscribe(deck => this.deck = deck)
  }

  startCountdown() {
    this.countdown = 20;
    const countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown == 0) {
        clearInterval(countdownInterval);
        this.router.navigate(["/match"]);
      }
    }, 1000);
  }
}
