import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoListComponent } from './components/medico-list/medico-list.component';
import { MedicoFormComponent } from './components/medico-form/medico-form.component';

const routes: Routes = [
  { path: '', component: MedicoListComponent },
  { path: 'nuevo', component: MedicoFormComponent },
  { path: 'editar/:id', component: MedicoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }