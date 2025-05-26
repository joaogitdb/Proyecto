import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { EstadisticasListComponent } from './components/estadisticas-list/estadisticas-list.component';
import { EstadisticasFormComponent } from './components/estadisticas-form/estadisticas-form.component';

@NgModule({
  declarations: [
    EstadisticasListComponent,
    EstadisticasFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EstadisticasRoutingModule
  ]
})
export class EstadisticasModule { }