import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadisticasService } from '../../services/estadisticas.service';
import { ToastrService } from 'ngx-toastr';
import { Estadistica } from '../../../../models/estadistica.model';

@Component({
  selector: 'app-estadisticas-form',
  templateUrl: './estadisticas-form.component.html'
})
export class EstadisticasFormComponent implements OnInit {
  form = this.fb.group({
    fecha: ['', Validators.required],
    altas: [0, [Validators.required, Validators.min(0)]],
    bajas: [0, [Validators.required, Validators.min(0)]]
  });
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private srv: EstadisticasService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const fecha = this.route.snapshot.paramMap.get('fecha');
    if (fecha) {
      this.isEdit = true;
      this.srv.get(fecha).subscribe(s => this.form.patchValue(s));
    }
  }

  save() {
    if (this.form.invalid) return;

    // ① casteamos el form.value a Estadistica
    const val = this.form.value as Estadistica;
    // ② desempaquetamos la fecha, y le decimos a TS que no es undefined
    const fecha = val.fecha!;

    const call$ = this.isEdit
      ? this.srv.update(fecha, val)
      : this.srv.create(val);

    call$.subscribe(
      () => {
        this.toastr.success('Guardado');
        this.router.navigate(['/estadisticas']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}