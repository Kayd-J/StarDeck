import { Component, OnInit } from '@angular/core';
import { DeckVariableService } from '../services/deck-variable.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-matchmaking',
  templateUrl: './matchmaking.component.html',
  styleUrls: ['./matchmaking.component.css']
})
export class MatchmakingComponent implements OnInit {
  jugador = "Jugador"
  rango = "Rango"
  jugadorImg = ''
  deck: any = '';
  playerList:any = []
  selection = false
  countdown: number = 20;

  constructor(private deckvar: DeckVariableService, private router: Router, private login: LoginService, private api:ApiService) { }

  ngOnInit(): void {
    this.deckvar.selectedDeck.subscribe(deck => this.deck = deck)
    this.getSetPlayer();
  }

  // Se obtiene la informacion del juador y se muestra
  getSetPlayer() {
    this.jugadorImg = this.login.jAvatar;
    this.jugador = this.login.jNombre;
    console.log(this.jugador);

  }

  startCountdown() {
    this.countdown = 20; 
    console.log(this.deck)
    if (this.deck != 'No se ha seleccionado un deck') {
      const countdownInterval = setInterval(() => {
        this.countdown--;
        if (this.countdown > 0) {
          this.lookForMatch()  
        }
        // si la cuenta llega a cero se debe volver a iniciar el proceso
        if (this.countdown <= 0) {
          clearInterval(countdownInterval);
          //this.router.navigate(["/match"]);
        }

      }, 1000);
    }else{
      alert('Debe seleccionar un Deck de cartas para poder buscar una partida!')
    }

  }

  lookForMatch(){
    // hacer get de todos los jugadores 
    this.api.getJugadores().subscribe(data=>{
      // recorrer la lista para encontrar un jugador disponible
      for (let i = 0; i < data.length; i++) {
        // iniciar partida si se encuentra uno
        if (data[i].estadodecuenta == true){
          this.login.eName = data[i].usuario;
          this.login.eAvatar = data[i].avatar;
          this.countdown = 0;
          this.router.navigate(["/match"]);
        }
      }
    });
    console.log(this.playerList)

  }
}
