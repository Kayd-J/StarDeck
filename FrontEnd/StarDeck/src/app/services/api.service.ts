import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Login } from '../models/login'
import { StatusI } from '../models/status-i'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="https://localhost:5031/api";

  constructor(private http:HttpClient) { }

  /**
   *
   * @param form Login
   * @returns StatusI
   * @description Funcion que se encarga de enviar los datos del formulario al servicio
   */
  loginByEmailCliente(form:Login):Observable<StatusI>{
    let direccion = this.url + "/Jugadores/Login";
    return this.http.post<StatusI>(direccion, form);
  }
  /**
   *
   * @param form LoginI
   * @returns StatusI
   * @description Funcion que se encarga de enviar los datos del formulario al servicio
   */
  loginByEmailAdmin(form:Login):Observable<StatusI>{
    let direccion = this.url + "/Admin/Login";
    return this.http.post<StatusI>(direccion, form);
  }
}

