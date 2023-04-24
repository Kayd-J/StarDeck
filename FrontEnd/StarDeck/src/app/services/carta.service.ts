import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CartaService {
  private url = "crearCarta";
  apiurl = "";


  constructor(private http: HttpClient) {}

  addCarta(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }

}
