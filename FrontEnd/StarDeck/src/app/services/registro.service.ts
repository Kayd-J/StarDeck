import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http : HttpClient) { }

  /**
   *
   * @param form Login
   * @returns StatusI
   * @description Funcion que se encarga de enviar los datos del formulario al servicio
   
  loginByEmailCliente(form:Login):Observable<StatusI>{
    let direccion = "/api/Jugadores/Login";
     console.log(form);
     console.log(direccion)
    return this.http.post<StatusI>(direccion, form);
  }
  */


  getUserbyID(id:string):Observable<Jugador[]>{
    console.log(id);
    let direccion = "/api/Jugadores/" + id;
    return this.http.get<Jugador[]>(`${direccion}`);
  }
}
