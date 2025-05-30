import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteFormComponent } from './modules/paciente/components/paciente-form/paciente-form.component';
import { PacienteListComponent } from './modules/paciente/components/paciente-list/paciente-list.component';

const routes: Routes = [
  { path: 'usuario',        loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'paciente',       loadChildren: () => import('./modules/paciente/paciente.module').then(m => m.PacienteModule) },
  { path: 'pacientes',   loadChildren: () => import('./modules/paciente/components/paciente-list/paciente-list.component').then(m => m.PacienteListComponent) },
  { path: 'nuevo', component: PacienteFormComponent },
  { path: 'editar/:id', component: PacienteFormComponent },
  { path: 'establecimiento',loadChildren: () => import('./modules/establecimiento/establecimiento.module').then(m => m.EstablecimientoModule) },
  { path: 'habitacion',     loadChildren: () => import('./modules/habitacion/habitacion.module').then(m => m.HabitacionModule) },
  { path: 'medico',         loadChildren: () => import('./modules/medico/medico.module').then(m => m.MedicoModule) },
  { path: 'motivo',         loadChildren: () => import('./modules/motivo/motivo.module').then(m => m.MotivoModule) },
  { path: 'reserva',        loadChildren: () => import('./modules/reserva/reserva.module').then(m => m.ReservaModule) },
  { path: 'estadisticas',   loadChildren: () => import('./modules/estadisticas/estadisticas.module').then(m => m.EstadisticasModule) },
  { path: 'dashboard',      loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }