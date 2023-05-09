import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckVariableService {
  private deck = new BehaviorSubject<any>("No se ha seleccionado un deck");
  selectedDeck = this.deck.asObservable();

  constructor() { }

  setCurrentDeck(deck: any){
    this.deck.next(deck)
  }
}
