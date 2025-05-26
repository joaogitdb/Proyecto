import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from '../../services/establecimiento.service';

import { ToastrService } from 'ngx-toastr';
import { Establecimiento } from '../../../../models/establecimiento.model';

@Component({
  selector: 'app-establecimiento-list',
  templateUrl: './establecimiento-list.component.html'
})
export class EstablecimientoListComponent implements OnInit {
  items: Establecimiento[] = [];

  constructor(
    private srv: EstablecimientoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.srv.list().subscribe(
      data => this.items = data,
      ()   => this.toastr.error('Error al cargar establecimientos')
    );
  }

  delete(id?: number) {
    if (!id || !confirm('¿Eliminar establecimiento?')) return;
    this.srv.delete(id).subscribe(
      () => { this.toastr.success('Eliminado'); this.load(); },
      () => this.toastr.error('Error al eliminar')
    );
  }
}