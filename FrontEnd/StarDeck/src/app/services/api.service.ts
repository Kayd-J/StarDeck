import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Login } from '../models/login'
import { IdForm } from '../models/id-form'
import { Jugador } from '../models/jugador'
import { StatusI } from '../models/status-i'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string='https://localhost:7257';

  constructor(private http:HttpClient) { }

  /**
   *
   * @param form Login
   * @returns StatusI
   * @description Funcion que se encarga de enviar los datos del formulario al servicio
   */
  loginByEmailCliente(form:Login):Observable<StatusI>{
    let direccion = '/api/Jugadores/Login';
     console.log(form);
     console.log(direccion)
    return this.http.post<StatusI>(direccion, form);
  }

  /**
   *
   * @param form Login
   * @returns StatusI
   * @description Funcion que se encarga de enviar los datos del formulario al servicio
   */
  addJugador(form:any):Observable<any>{
    let direccion = '/api/Jugadores/PostJugador';
     console.log(form);
     console.log(direccion)
    return this.http.post<any>(direccion, form);
  }
  getJugadores():Observable<any[]>{
    return this.http.get<any>(this.url+'/api/Jugadores/GetJugador');
  }
  /**
   * 
   * @param form Cartas
   * @returns Funcion que se encarga de enviar los datos del formulario de las cartas
   */
  addCarta(form:any):Observable<any>{
    let direccion = this.url+'/api/Cartas/PostCarta';
     console.log(JSON.stringify(form));
     console.log(direccion)
    return this.http.post<any>(direccion, form);
  }

  addPlaneta(form:any):Observable<any>{
    let direccion = this.url+'/api/Planetas/PostPlaneta';
     console.log(JSON.stringify(form));
     console.log(direccion)
    return this.http.post<any>(direccion, form);
  }


  /**
   *
   * @param form LoginI
   * @returns StatusI
   * @description Funcion que se encarga de enviar los datos del formulario al servicio
   */
  loginByEmailAdmin(form:any):Observable<any>{
    let direccion = this.url + '/Admin/Login';
    return this.http.post<any>(direccion, form);
  }

  getDecksById(id: string):Observable<any>{
    //let direccion = this.url + '/api/Jugadores/SP/GetAllDecksFromPlayer/${id}';
    return this.http.get(`${this.url}/api/Jugadores/SP/GetAllDecksFromPlayer/${id}/`);
  }

  
}

