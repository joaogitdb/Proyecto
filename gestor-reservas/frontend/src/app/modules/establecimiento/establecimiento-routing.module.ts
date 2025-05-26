import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablecimientoListComponent } from './components/establecimiento-list/establecimiento-list.component';
import { EstablecimientoFormComponent } from './components/establecimiento-form/establecimiento-form.component';

const routes: Routes = [
  { path: '',      component: EstablecimientoListComponent },
  { path: 'nuevo', component: EstablecimientoFormComponent },
  { path: 'editar/:id', component: EstablecimientoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablecimientoRoutingModule { }