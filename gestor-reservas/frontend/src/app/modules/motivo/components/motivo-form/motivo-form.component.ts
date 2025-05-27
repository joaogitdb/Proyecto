import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MotivoService } from '../../services/motivo.service';
import { ToastrService } from 'ngx-toastr';
import { Motivo } from '../../../../models/motivo.model';

@Component({
  selector: 'app-motivo-form',
  templateUrl: './motivo-form.component.html'
})
export class MotivoFormComponent implements OnInit {
  form = this.fb.group({
    tipo: ['ENTRADA', Validators.required],
    descripcion: ['', Validators.required]
  });
  id?: number;

  constructor(
    private fb: FormBuilder,
    private srv: MotivoService,
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
    const payload = this.form.value as Motivo;

    const fn = this.id
      ? this.srv.update(this.id, payload)
      : this.srv.create(payload);
    fn.subscribe(
      () => {
        this.toastr.success('Guardado');
        this.router.navigate(['/motivo']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}