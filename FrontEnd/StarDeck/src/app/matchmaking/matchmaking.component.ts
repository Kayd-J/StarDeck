import { Component, OnInit } from '@angular/core';
import { DeckVariableService } from '../services/deck-variable.service';

@Component({
  selector: 'app-matchmaking',
  templateUrl: './matchmaking.component.html',
  styleUrls: ['./matchmaking.component.css']
})
export class MatchmakingComponent implements OnInit {
  jugador = "Jugador"
  rango = "Rango"
  deck:any;
  constructor(private deckvar: DeckVariableService) { }

  ngOnInit(): void {
    this.deckvar.selectedDeck.subscribe(deck => this.deck = deck)
  }

}
