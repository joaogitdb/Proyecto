import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HabitacionRoutingModule } from './habitacion-routing.module';
import { HabitacionListComponent } from './components/habitacion-list/habitacion-list.component';
import { HabitacionFormComponent } from './components/habitacion-form/habitacion-form.component';

@NgModule({
  declarations: [
    HabitacionListComponent,
    HabitacionFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HabitacionRoutingModule
  ]
})
export class HabitacionModule { }