// src/app/components/usuario-list/usuario-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  items: Usuario[] = [];

  constructor(
    private srv: UsuarioService,
    private toastr: ToastrService
  ) { }

   ngOnInit(): void {
    this.load();
  }

  load() {
    this.srv.list().subscribe(
      data => this.items = data,
      ()   => this.toastr.error('Error al cargar usuarios')
    );
  }

  delete(id?: number) {
    if (!id || !confirm('¿Eliminar usuario?')) return;
    this.srv.delete(id).subscribe(
      () => { this.toastr.success('Eliminado'); this.load(); },
      () => this.toastr.error('Error al eliminar')
    );
  }
}
