import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionService } from '../../services/habitacion.service';
import { ToastrService } from 'ngx-toastr';
import { Habitacion } from '../../../../models/habitacion.model';

@Component({
  selector: 'app-habitacion-form',
  templateUrl: './habitacion-form.component.html'
})
export class HabitacionFormComponent implements OnInit {
  form = this.fb.group({
    establecimiento_id: [null, Validators.required],
    bloque: [''],
    piso: ['']
  });
  id?: number;

  constructor(
    private fb: FormBuilder,
    private srv: HabitacionService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.srv.get(this.id).subscribe(h => this.form.patchValue(h as any));
    }
  }

  save() {
    if (this.form.invalid) return;

    const payload = this.form.value as unknown as Habitacion;


    const fn = this.id
      ? this.srv.update(this.id, payload)
      : this.srv.create(payload);
    fn.subscribe(
      () => {
        this.toastr.success('Guardado');
        this.router.navigate(['/habitacion']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}