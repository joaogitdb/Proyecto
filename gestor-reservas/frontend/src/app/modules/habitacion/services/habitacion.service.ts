import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Habitacion } from '../../../models/habitacion.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HabitacionService {
  private api = `${environment.apiUrl}/habitaciones`;

  constructor(private http: HttpClient) { }

  list(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(this.api);
  }
  get(id: number): Observable<Habitacion> {
    return this.http.get<Habitacion>(`${this.api}/${id}`);
  }
  create(h: Habitacion): Observable<Habitacion> {
    return this.http.post<Habitacion>(this.api, h);
  }
  update(id: number, h: Habitacion): Observable<Habitacion> {
    return this.http.put<Habitacion>(`${this.api}/${id}`, h);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}