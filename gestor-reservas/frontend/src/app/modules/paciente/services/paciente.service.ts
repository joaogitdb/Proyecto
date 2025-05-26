import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../../../models/paciente.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PacienteService {
  private api = `${environment.apiUrl}/pacientes`;

  constructor(private http: HttpClient) { }

  list(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.api);
  }
  get(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.api}/${id}`);
  }
  create(p: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.api, p);
  }
  update(id: number, p: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.api}/${id}`, p);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}