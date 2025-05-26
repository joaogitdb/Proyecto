import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Establecimiento } from '../../../models/establecimiento.model';


@Injectable({ providedIn: 'root' })
export class EstablecimientoService {
  private api = `${environment.apiUrl}/establecimientos`;

  constructor(private http: HttpClient) { }

  list(): Observable<Establecimiento[]> {
    return this.http.get<Establecimiento[]>(this.api);
  }
  get(id: number): Observable<Establecimiento> {
    return this.http.get<Establecimiento>(`${this.api}/${id}`);
  }
  create(e: Establecimiento): Observable<Establecimiento> {
    return this.http.post<Establecimiento>(this.api, e);
  }
  update(id: number, e: Establecimiento): Observable<Establecimiento> {
    return this.http.put<Establecimiento>(`${this.api}/${id}`, e);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}