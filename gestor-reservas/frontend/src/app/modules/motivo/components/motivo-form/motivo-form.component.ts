import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MotivoService } from '../../services/motivo.service';
import { ToastrService } from 'ngx-toastr';

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
    const fn = this.id
      ? this.srv.update(this.id, this.form.value)
      : this.srv.create(this.form.value);
    fn.subscribe(
      () => {
        this.toastr.success('Guardado');
        this.router.navigate(['/motivo']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}