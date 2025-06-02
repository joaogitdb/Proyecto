import { Component, OnInit } from '@angular/core';

import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../../../models/paciente.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(
    private srv: PacienteService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.srv.list().subscribe(
      data => this.pacientes = data,
      ()   => this.toastr.error('Error al cargar pacientes')
    );
  }

  edit(id?: number) {
    if (!id) { return; }
    this.srv.get(id).subscribe(
      data => {
        // Aquí podrías abrir un modal o redirigir a un formulario de edición
        console.log('Editar paciente:', data);
      },
      () => this.toastr.error('Error al cargar paciente')
    );
  }

  delete(id?: number) {
    if (!id || !confirm('¿Eliminar paciente?')) { return; }
    this.srv.delete(id).subscribe(
      () => { this.toastr.success('Paciente eliminado'); this.load(); },
      () => this.toastr.error('Error al eliminar')
    );
  }
}
