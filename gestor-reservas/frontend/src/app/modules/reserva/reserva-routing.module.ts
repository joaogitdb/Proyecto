import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaListComponent } from './components/reserva-list/reserva-list.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';

const routes: Routes = [
  { path: '',      component: ReservaListComponent },
  { path: 'nuevo', component: ReservaFormComponent },
  { path: 'editar/:id', component: ReservaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }