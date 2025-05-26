import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitacionListComponent } from './components/habitacion-list/habitacion-list.component';
import { HabitacionFormComponent } from './components/habitacion-form/habitacion-form.component';

const routes: Routes = [
  { path: '',      component: HabitacionListComponent },
  { path: 'nuevo', component: HabitacionFormComponent },
  { path: 'editar/:id', component: HabitacionFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitacionRoutingModule { }
