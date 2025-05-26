import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotivoListComponent } from './components/motivo-list/motivo-list.component';
import { MotivoFormComponent } from './components/motivo-form/motivo-form.component';

const routes: Routes = [
  { path: '',      component: MotivoListComponent },
  { path: 'nuevo', component: MotivoFormComponent },
  { path: 'editar/:id', component: MotivoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivoRoutingModule { }