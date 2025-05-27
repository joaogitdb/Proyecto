import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstablecimientoService } from '../../services/establecimiento.service';
import { ToastrService } from 'ngx-toastr';
import { Establecimiento } from '../../../../models/establecimiento.model';

@Component({
  selector: 'app-establecimiento-form',
  templateUrl: './establecimiento-form.component.html'
})
export class EstablecimientoFormComponent implements OnInit {
  form = this.fb.group({
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    capacidad: [0, [Validators.required, Validators.min(1)]],
    tipo: ['']
  });
  id?: number;

  constructor(
    private fb: FormBuilder,
    private srv: EstablecimientoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.srv.get(this.id).subscribe(e => this.form.patchValue(e));
    }
  }

  save() {
    if (this.form.invalid) return;

    const payload = this.form.value as Establecimiento;

    const fn = this.id
      ? this.srv.update(this.id, payload)
      : this.srv.create(payload);
    fn.subscribe(
      () => {
        this.toastr.success('Guardado');
        this.router.navigate(['/establecimiento']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}