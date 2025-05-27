import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../../services/medico.service';
import { ToastrService } from 'ngx-toastr';
import { Medico } from '../../../../models/medico.model';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html'
})
export class MedicoFormComponent implements OnInit {
  form = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    documento_identidad: ['', Validators.required],
    especialidad: ['']
  });
  id?: number;

  constructor(
    private fb: FormBuilder,
    private srv: MedicoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.srv.get(this.id).subscribe(m => this.form.patchValue(m));
    }
  }

  save() {
    if (this.form.invalid) return;

    // Casteamos el form.value a un objeto con las propiedades esperadas
    const payload = this.form.value as Medico;

    const fn = this.id
      ? this.srv.update(this.id,  payload)
      : this.srv.create(payload);
    fn.subscribe(
      () => {
        this.toastr.success('Guardado');
        this.router.navigate(['/medico']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}