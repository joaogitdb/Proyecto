import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
editarUsuario(_t19: any) {
throw new Error('Method not implemented.');
}
  // 1) Array donde guardaremos los usuarios recibidos del backend
  usuarios: Usuario[] = [];

  // 2) Banderas para controlar estado de carga y posibles errores
  cargando: boolean = false;
  errorMensaje: string = '';

  // 3) Inyectamos el servicio de usuarios
  constructor(private usuarioService: UsuarioService) { }

  // 4) En ngOnInit llamamos al método que trae la lista
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
      error: (err) => {
        console.error('Error al traer usuarios:', err);
        this.errorMensaje = 'No se pudieron cargar los usuarios.';
        this.cargando = false;
      }
    });
  }
}