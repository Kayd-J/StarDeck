import { Component, OnInit } from '@angular/core';
import { deck } from '../models/deck';
import { ApiService } from '../services/api.service';
import { MatchmakingComponent } from '../matchmaking/matchmaking.component';
import { DeckVariableService } from '../services/deck-variable.service';
import { CookieService } from 'ngx-cookie-service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-selec-deck',
  templateUrl: './selec-deck.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 0, noPause: true, showIndicators: true } }
 ],
  styleUrls: ['./selec-deck.component.css']
})



export class SelecDeckComponent implements OnInit {


  listDecks!: deck[];
  deck:any;
  itemsPerSlide = 6;
  singleSlideOffset = true;
  slides = [
    {image: 'assets/Images/Barglo.jpg'},
    {image: 'assets/Images/Kepto.jpg'},
    {image: 'assets/Images/Mazli.jpg'},
    {image: 'assets/Images/Yeka.jpg'},
    {image: 'assets/Images/Warloc.jpg'},
    {image: 'assets/Images/Lumien.jpg'},
 ];

  constructor(private api:ApiService,private deckvar: DeckVariableService, private cookieService: CookieService ) { }

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
    this.deckvar.setCurrentDeck(deck.nombre);
    console.log(deck)
  }

}
