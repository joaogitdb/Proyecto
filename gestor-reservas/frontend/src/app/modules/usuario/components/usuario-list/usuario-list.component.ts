// src/app/components/usuario-list/usuario-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  // 1) Array donde guardaremos los usuarios
  usuarios: Usuario[] = [];

  // 2) Banderas para controlar estado de carga y posibles errores
  cargando = false;
  errorMensaje = '';

  // 3) Inyectamos el servicio de usuarios
  constructor(private usuarioService: UsuarioService) { }

  // 4) Al iniciar el componente, traemos la lista desde el backend
  ngOnInit(): void {
    this.traerUsuarios();
  }

  // 5) Método que llama al servicio y maneja la respuesta
  traerUsuarios(): void {
    this.cargando = true;
    this.usuarioService.list().subscribe({
      next: (data: Usuario[]) => {
        this.usuarios = data;
        this.cargando = false;
      },
      error: (err: any) => {
        console.error('Error al traer usuarios:', err);
        this.errorMensaje = 'No se pudieron cargar los usuarios.';
        this.cargando = false;
      }
    });
  }

  // (Opcional) Métodos para editar/borrar, según tu lógica
  editarUsuario(u: Usuario) {
    // Aquí podrías navegar a un formulario de edición,
    // p.ej. this.router.navigate(['/usuarios/edit', u.usuario_id]);
    console.log('Editar usuario', u);
  }

  eliminarUsuario(id: number) {
    // Lógica para eliminar (llamar a usuarioService.delete(id).subscribe(...))
    console.log('Eliminar usuario con id', id);
  }
}
