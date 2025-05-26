import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { PacienteRoutingModule } from './paciente-routing.module';

import { PacienteComponent } from './paciente.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';

@NgModule({
  declarations: [
    PacienteComponent,
    PacienteFormComponent,
    PacienteListComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    ReactiveFormsModule
  ]
})
export class PacienteModule { }
