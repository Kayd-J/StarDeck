import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Carta } from '../models/carta';


@Injectable({
  providedIn: 'root'
})
export class CartaService {
  private url = "crear-carta";
  
  constructor(private http: HttpClient) {}

  public addCarta(carta: Carta): Observable<Carta[]>{
    return this.http.post<Carta[]>(
      `${environment.apiURL}/${this.url}`, carta
    );
  }

  public updateCarta(carta: Carta): Observable<Carta[]>{
    return this.http.put<Carta[]>(
      `${environment.apiURL}/${this.url}`, carta
    );
  }
}
