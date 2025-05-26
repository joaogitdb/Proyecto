import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../../models/usuario.model';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html'
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private srv: UsuarioService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.srv.list().subscribe(
      data => this.usuarios = data,
      ()   => this.toastr.error('Error cargando usuarios')
    );
  }

  delete(id?: number) {
    if (!id || !confirm('¿Eliminar usuario?')) return;
    this.srv.delete(id).subscribe(
      () => { this.toastr.success('Usuario eliminado'); this.load(); },
      () => this.toastr.error('Error al eliminar')
    );
  }
}