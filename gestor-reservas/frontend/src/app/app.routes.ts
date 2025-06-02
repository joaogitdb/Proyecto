import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reserva',
    loadChildren: () =>
      import('./modules/reserva/reserva.module').then(m => m.ReservaModule)
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./modules/usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'pacientes',
    loadChildren: () =>
      import('./modules/paciente/paciente.module').then(m => m.PacienteModule)
  },
  {
    path: 'establecimiento',
    loadChildren: () =>
      import('./modules/establecimiento/establecimiento.module').then(m => m.EstablecimientoModule)
  },
  {
    path: 'habitacion',
    loadChildren: () =>
      import('./modules/habitacion/habitacion.module').then(m => m.HabitacionModule)
  },
  {
    path: 'medico',
    loadChildren: () =>
      import('./modules/medico/medico.module').then(m => m.MedicoModule)
  },
  {
    path: 'motivo',
    loadChildren: () =>
      import('./modules/motivo/motivo.module').then(m => m.MotivoModule)
  },
  {
    path: 'estadisticas',
    loadChildren: () =>
      import('./modules/estadisticas/estadisticas.module').then(m => m.EstadisticasModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // redirección por defecto y wildcard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
