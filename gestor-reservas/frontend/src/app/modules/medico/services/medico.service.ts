import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Medico } from '../../../models/medico.model';


@Injectable({ providedIn: 'root' })
export class MedicoService {
  private api = `${environment.apiUrl}/medicos`;

  constructor(private http: HttpClient) { }

  list(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.api);
  }
  get(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${this.api}/${id}`);
  }
  create(m: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.api, m);
  }
  update(id: number, m: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${this.api}/${id}`, m);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}