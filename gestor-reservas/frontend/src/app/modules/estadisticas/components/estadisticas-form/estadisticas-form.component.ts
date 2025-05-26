import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadisticasService } from '../../services/estadisticas.service';
import { ToastrService } from 'ngx-toastr';

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
    const val = this.form.value;
    const fn = this.isEdit
      ? this.srv.update(val.fecha, val)
      : this.srv.create(val);
    fn.subscribe(
      () => {
        this.toastr.success('Guardado');
        this.router.navigate(['/estadisticas']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}