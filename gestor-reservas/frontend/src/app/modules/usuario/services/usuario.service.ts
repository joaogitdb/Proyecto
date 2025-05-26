import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Usuario } from '../../../models/usuario.model';


@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private api = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) { }

  list(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.api);
  }
  get(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.api}/${id}`);
  }
  create(u: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.api, u);
  }
  update(id: number, u: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.api}/${id}`, u);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}