import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class MatchmakingService {
  // variables globales de la partida
  jugName = 'Player'
  jugAvatar = ''
  JugDeck = ''

  eName = 'Enemy'
  eAvatar = ''
  eDeck =''

  planetas = ''


  constructor(private login:LoginService) { }

  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.setJugador(this.login.jNombre,this.login.jAvatar);
  }

  /**
   * 
   * @param usuario nombre de usuario del jugador
   * @param deck lista de cartas del deck
   * @param img imagen de perfil
   */
  setJugador(usuario:string, img:string){
    this.jugName = usuario;
    this.jugAvatar = img;
  }

  setJugDeck(deck:string){
    this.JugDeck = deck;
  }

  /**
   * 
   * @param usuario nombre de usuario del enemigo
   * @param deck lista de cartas del deck
   * @param img imagen de perfil
   */
  setEnemy(usuario:string, img:string){
    this.eName = usuario;
    this.eAvatar = img

  }
  /**
   * 
   * @param planetJson lista con 3 planetas para jugar
   */
  setPlanets(planetJson:string){
    //planetas
    this.planetas = planetJson
  }

}


// LLAMAR A TODAS ESTAS FUNCIONES DESDE "BUSCAR PARTIDA"