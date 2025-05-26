import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Reserva } from '../../../models/reserva.model';


@Injectable({ providedIn: 'root' })
export class ReservaService {
  private api = `${environment.apiUrl}/reservas`;

  constructor(private http: HttpClient) { }

  list(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.api);
  }
  get(id: number): Observable<Reserva> {
    return this.http.get<Reserva>(`${this.api}/${id}`);
  }
  create(r: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.api, r);
  }
  update(id: number, r: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(`${this.api}/${id}`, r);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}