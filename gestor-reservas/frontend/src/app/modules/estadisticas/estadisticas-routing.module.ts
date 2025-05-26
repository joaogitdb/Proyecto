import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasListComponent } from './components/estadisticas-list/estadisticas-list.component';
import { EstadisticasFormComponent } from './components/estadisticas-form/estadisticas-form.component';

const routes: Routes = [
  { path: '',      component: EstadisticasListComponent },
  { path: 'nuevo', component: EstadisticasFormComponent },
  { path: 'editar/:fecha', component: EstadisticasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadisticasRoutingModule { }