import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico.service';

import { ToastrService } from 'ngx-toastr';
import { Medico } from '../../../../models/medico.model';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html'
})
export class MedicoListComponent implements OnInit {
  medicos: Medico[] = [];

  constructor(
    private srv: MedicoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.srv.list().subscribe(
      data => this.medicos = data,
      ()   => this.toastr.error('Error al cargar médicos')
    );
  }

  delete(id?: number) {
    if (!id || !confirm('¿Eliminar médico?')) return;
    this.srv.delete(id).subscribe(
      () => { this.toastr.success('Médico eliminado'); this.load(); },
      () => this.toastr.error('Error al eliminar')
    );
  }
}