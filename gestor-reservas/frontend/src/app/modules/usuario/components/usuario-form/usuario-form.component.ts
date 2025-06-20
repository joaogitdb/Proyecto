import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../../models/usuario.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html'
})
export class UsuarioFormComponent implements OnInit {
  form = this.fb.group({
    username: ['', Validators.required],
    passwordHash: ['', Validators.required],
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
      this.srv.get(this.id).subscribe(u => this.form.patchValue({
        username: u.username,
        passwordHash: u.passwordHash,
        rol: u.rol
      }));
    }
  }

  save() {
    if (this.form.invalid) return;

    const payload = this.form.value as Usuario;

    
    const fn = this.id
      ? this.srv.update(this.id, payload)
      : this.srv.create(payload);
    fn.subscribe(
      () => {
        this.toastr.success('Guardado');
        this.router.navigate(['/usuario']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}