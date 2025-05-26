import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../../services/habitacion.service';
import { ToastrService } from 'ngx-toastr';
import { Habitacion } from '../../../../models/habitacion.model';

@Component({
  selector: 'app-habitacion-list',
  templateUrl: './habitacion-list.component.html'
})
export class HabitacionListComponent implements OnInit {
  habitaciones: Habitacion[] = [];

  constructor(
    private srv: HabitacionService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.srv.list().subscribe(
      data => this.habitaciones = data,
      ()   => this.toastr.error('Error al cargar habitaciones')
    );
  }

  delete(id?: number) {
    if (!id || !confirm('¿Eliminar habitación?')) return;
    this.srv.delete(id).subscribe(
      () => { this.toastr.success('Habitación eliminada'); this.load(); },
      () => this.toastr.error('Error al eliminar')
    );
  }
}