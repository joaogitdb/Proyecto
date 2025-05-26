import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from '../../../../models/paciente.model';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html'
})
export class PacienteFormComponent implements OnInit {
  form = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    fecha_nacimiento: ['', Validators.required],
    documento_identidad: ['', Validators.required],
    contacto: ['']
  });
  id?: number;

  constructor(
    private fb: FormBuilder,
    private srv: PacienteService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.srv.get(this.id).subscribe(p => this.form.patchValue(p));
    }
  }

  save() {
    if (this.form.invalid) { return; }
    const paciente = this.form.value as Paciente;

    const fn = this.id
      ? this.srv.update(this.id, paciente)
      : this.srv.create(paciente);

    fn.subscribe(
      () => {
        this.toastr.success('Guardado');
        this.router.navigate(['/paciente']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}