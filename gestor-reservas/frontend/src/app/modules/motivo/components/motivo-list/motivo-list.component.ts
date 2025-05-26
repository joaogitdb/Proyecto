import { Component, OnInit } from '@angular/core';
import { MotivoService } from '../../services/motivo.service';

import { ToastrService } from 'ngx-toastr';
import { Motivo } from '../../../../models/motivo.model';

@Component({
  selector: 'app-motivo-list',
  templateUrl: './motivo-list.component.html'
})
export class MotivoListComponent implements OnInit {
  motivos: Motivo[] = [];

  constructor(
    private srv: MotivoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.srv.list().subscribe(
      data => this.motivos = data,
      ()   => this.toastr.error('Error al cargar motivos')
    );
  }

  delete(id?: number) {
    if (!id || !confirm('¿Eliminar motivo?')) return;
    this.srv.delete(id).subscribe(
      () => { this.toastr.success('Motivo eliminado'); this.load(); },
      () => this.toastr.error('Error al eliminar')
    );
  }
}