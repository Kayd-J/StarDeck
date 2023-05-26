import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Planeta } from '../models/planeta';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {
  private url = 'Planetas';

  constructor(private http: HttpClient) {}

  // public addPlaneta(planeta: Planeta): Observable<Planeta[]>{
  //   return this.http.post<Planeta[]>(
  //     `${environment.apiURL}/${this.url}`, planeta
  //   );
  // }

  addPlaneta(form:any):Observable<any>{
    let direccion = this.url+'/api/Planetas/PostPlaneta';
     console.log(JSON.stringify(form));
     console.log(direccion)
    return this.http.post<any>(direccion, form);
  }

  public updateCarta(planeta: Planeta): Observable<Planeta[]>{
    return this.http.put<Planeta[]>(
      `${environment.apiURL}/${this.url}`, planeta
    );
  }

  public getPlaneta(id: string): Observable<Planeta> {
    return this.http.get<Planeta>(`${environment.apiURL}/${this.url}/${id}`);
  }

}

