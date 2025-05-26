import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Estadistica } from '../../../models/estadistica.model';

@Injectable({ providedIn: 'root' })
export class EstadisticasService {
  private api = `${environment.apiUrl}/estadisticas`;

  constructor(private http: HttpClient) { }

  list(): Observable<Estadistica[]> {
    return this.http.get<Estadistica[]>(this.api);
  }
  get(fecha: string): Observable<Estadistica> {
    return this.http.get<Estadistica>(`${this.api}/${fecha}`);
  }
  create(e: Estadistica): Observable<Estadistica> {
    return this.http.post<Estadistica>(this.api, e);
  }
  update(fecha: string, e: Estadistica): Observable<Estadistica> {
    return this.http.put<Estadistica>(`${this.api}/${fecha}`, e);
  }
  delete(fecha: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/${fecha}`);
  }
}