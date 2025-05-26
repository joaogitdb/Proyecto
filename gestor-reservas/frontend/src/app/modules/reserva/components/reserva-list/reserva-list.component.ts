import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';

import { ToastrService } from 'ngx-toastr';
import { Reserva } from '../../../../models/reserva.model';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html'
})
export class ReservaListComponent implements OnInit {
  reservas: Reserva[] = [];

  constructor(
    private srv: ReservaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { this.load(); }

  load() {
    this.srv.list().subscribe(
      data => this.reservas = data,
      ()   => this.toastr.error('Error al cargar reservas')
    );
  }

  delete(id?: number) {
    if (!id || !confirm('¿Eliminar reserva?')) return;
    this.srv.delete(id).subscribe(
      () => { this.toastr.success('Reserva eliminada'); this.load(); },
      () => this.toastr.error('Error al eliminar')
    );
  }
}