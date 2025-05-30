import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';

const routes: Routes = [
  { path: 'pacientes', component: PacienteListComponent },
  { path: 'nuevo', component: PacienteFormComponent },
  { path: 'editar/:id', component: PacienteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }