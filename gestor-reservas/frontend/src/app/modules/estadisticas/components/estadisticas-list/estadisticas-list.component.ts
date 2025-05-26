import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../../services/estadisticas.service';

import { ToastrService } from 'ngx-toastr';
import { Estadistica } from '../../../../models/estadistica.model';

@Component({
  selector: 'app-estadisticas-list',
  templateUrl: './estadisticas-list.component.html'
})
export class EstadisticasListComponent implements OnInit {
  stats: Estadistica[] = [];

  constructor(
    private srv: EstadisticasService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { this.load(); }

  load() {
    this.srv.list().subscribe(
      data => this.stats = data,
      ()   => this.toastr.error('Error al cargar estadísticas')
    );
  }

  delete(fecha?: string) {
    if (!fecha || !confirm('¿Eliminar estadística?')) return;
    this.srv.delete(fecha).subscribe(
      () => { this.toastr.success('Eliminada'); this.load(); },
      () => this.toastr.error('Error al eliminar')
    );
  }
}