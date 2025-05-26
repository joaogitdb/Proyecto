import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Reserva } from '../../../../models/reserva.model';
import { Paciente } from '../../../../models/paciente.model';
import { Establecimiento } from '../../../../models/establecimiento.model';
import { Habitacion } from '../../../../models/habitacion.model';
import { Medico } from '../../../../models/medico.model';
import { Motivo } from '../../../../models/motivo.model';

import { ReservaService } from '../../services/reserva.service';
import { PacienteService } from '../../../paciente/services/paciente.service';
import { EstablecimientoService } from '../../../establecimiento/services/establecimiento.service';
import { HabitacionService } from '../../../habitacion/services/habitacion.service';
import { MedicoService } from '../../../medico/services/medico.service';
import { MotivoService } from '../../../motivo/services/motivo.service';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html'
})
export class ReservaFormComponent implements OnInit {
  form: FormGroup;

  pacientes: Paciente[] = [];
  establecimientos: Establecimiento[] = [];
  habitaciones: Habitacion[] = [];
  medicos: Medico[] = [];
  motivos: Motivo[] = [];

  id?: number;

  constructor(
    private fb: FormBuilder,
    private srv: ReservaService,
    private pacienteSrv: PacienteService,
    private estabSrv: EstablecimientoService,
    private habSrv: HabitacionService,
    private medicoSrv: MedicoService,
    private motivoSrv: MotivoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    // ① Define aquí tu grupo de controles
    this.form = this.fb.group({
      paciente_id:      [null, Validators.required],
      establecimiento_id: [null, Validators.required],
      habitacion_id:    [null],
      medico_id:        [null],
      motivo_entrada_id: [null, Validators.required],
      motivo_salida_id: [null],
      fecha_entrada:    ['', Validators.required],
      fecha_salida:     ['', Validators.required],
      estado:           ['ACTIVA', Validators.required]
    });
  }

  ngOnInit(): void {
    // carga selectores
    this.pacienteSrv.list().subscribe(data => this.pacientes = data);
    this.estabSrv.list().subscribe(data => this.establecimientos = data);
    this.habSrv.list().subscribe(data => this.habitaciones = data);
    this.medicoSrv.list().subscribe(data => this.medicos = data);
    this.motivoSrv.list().subscribe(data => this.motivos = data);

    // si viene id, carga para editar
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.srv.get(this.id).subscribe(r => {
        this.form.patchValue(r);
        this.onEstablecimientoChange(r.establecimiento_id);
      });
    }

    // ② usa FormControl para suscribirte sin que TS se queje
    const estabCtrl = this.form.get('establecimiento_id') as FormControl;
    estabCtrl.valueChanges.subscribe((val: number) => {
      this.onEstablecimientoChange(+val);
    });
  }

  private onEstablecimientoChange(estabId: number) {
    if (!estabId) {
      this.habitaciones = [];
      return;
    }
    this.habSrv.list().subscribe(all => {
      this.habitaciones = all.filter(h => h.establecimiento_id === estabId);
    });
    this.form.get('habitacion_id')!.setValue(null);
  }

  save() {
    if (this.form.invalid) return;

    // ③ cast directo a Reserva
    const payload = this.form.value as Reserva;

    const call$ = this.id
      ? this.srv.update(this.id, payload)
      : this.srv.create(payload);

    call$.subscribe(
      () => {
        this.toastr.success('Guardado');
        this.router.navigate(['/reserva']);
      },
      () => this.toastr.error('Error al guardar')
    );
  }
}