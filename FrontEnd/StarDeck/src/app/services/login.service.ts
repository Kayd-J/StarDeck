import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Jugador = [] // Esto va a ser un JSON
  jNombre = ''
  jAvatar = ''
  jId = ''
  eName = ''
  eAvatar = ''

  constructor(private api:ApiService) { }

  getUsr(id:string){
    this.jId = JSON.parse(String(this.api.getJugador(id)));
  }

  setData(player:any){
    this.jNombre = player.usuario;
    this.jAvatar = player.avatar;
  }

}
