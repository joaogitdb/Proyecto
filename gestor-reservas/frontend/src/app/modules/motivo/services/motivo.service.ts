import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Motivo } from '../../../models/motivo.model';


@Injectable({ providedIn: 'root' })
export class MotivoService {
  private api = `${environment.apiUrl}/motivos`;

  constructor(private http: HttpClient) { }

  list(): Observable<Motivo[]> {
    return this.http.get<Motivo[]>(this.api);
  }
  get(id: number): Observable<Motivo> {
    return this.http.get<Motivo>(`${this.api}/${id}`);
  }
  create(m: Motivo): Observable<Motivo> {
    return this.http.post<Motivo>(this.api, m);
  }
  update(id: number, m: Motivo): Observable<Motivo> {
    return this.http.put<Motivo>(`${this.api}/${id}`, m);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}