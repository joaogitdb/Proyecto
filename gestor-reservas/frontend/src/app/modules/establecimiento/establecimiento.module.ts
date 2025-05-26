import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EstablecimientoRoutingModule } from './establecimiento-routing.module';
import { EstablecimientoListComponent } from './components/establecimiento-list/establecimiento-list.component';
import { EstablecimientoFormComponent } from './components/establecimiento-form/establecimiento-form.component';

@NgModule({
  declarations: [
    EstablecimientoListComponent,
    EstablecimientoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EstablecimientoRoutingModule
  ]
})
export class EstablecimientoModule { }