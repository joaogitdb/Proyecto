import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../../services/medico.service';
import { ToastrService } from 'ngx-toastr';

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
    const fn = this.id
      ? this.srv.update(this.id,  this.form.value)
      : this.srv.create(this.form.value);
    fn.subscribe(
      () => {
        this.toastr.success('Guardado');
        this.router.navigate(['/medico']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}