import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Jugador = [] // Esto va a ser un JSON
  jNombre = ''
  jAvatar = ''

  constructor(private api:ApiService) { }

  getUsr(id:string){
    this.Jugador = JSON.parse(String(this.api.getJugador(id)));
  }

  setData(){
    this.jNombre = this.Jugador[0]['usuario'];
    this.jAvatar = this.Jugador[0]['avatar'];
  }

}
