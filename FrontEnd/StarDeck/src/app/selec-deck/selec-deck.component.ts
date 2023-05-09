import { Component, OnInit } from '@angular/core';
import { deck } from '../models/deck';
import { ApiService } from '../services/api.service';
import { MatchmakingComponent } from '../matchmaking/matchmaking.component';
import { DeckVariableService } from '../services/deck-variable.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-selec-deck',
  templateUrl: './selec-deck.component.html',
  styleUrls: ['./selec-deck.component.css']
})



export class SelecDeckComponent implements OnInit {


  listDecks!: deck[];
  deck:any;
  cookieService: any;

  constructor(private api:ApiService,private deckvar: DeckVariableService) { }

  ngOnInit(): void {
    this.fetchDecks();
    this.deckvar.selectedDeck.subscribe(deck => this.deck = deck)
  }
  fetchDecks(){
     // Get a cookie
    const usercookie = this.cookieService.get('UserCookie').toString();
    console.log(usercookie);
    this.api.getDecksById(usercookie).subscribe(data=>{
      this.listDecks = data
      console.log(this.listDecks)
    })
  }

  onSelect(deck: any){
    this.deckvar.setCurrentDeck(deck);
    console.log(deck)
  }

}
