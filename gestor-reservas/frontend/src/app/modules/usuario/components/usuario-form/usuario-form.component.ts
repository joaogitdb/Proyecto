import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html'
})
export class UsuarioFormComponent implements OnInit {
  form = this.fb.group({
    username: ['', Validators.required],
    password_hash: ['', Validators.required],
    rol: ['LECTOR', Validators.required]
  });
  id?: number;

  constructor(
    private fb: FormBuilder,
    private srv: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.srv.get(this.id).subscribe(u => this.form.patchValue(u));
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
        this.router.navigate(['/usuario']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}