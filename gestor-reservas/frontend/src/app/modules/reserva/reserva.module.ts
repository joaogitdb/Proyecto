import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaListComponent } from './components/reserva-list/reserva-list.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';

@NgModule({
  declarations: [
    ReservaListComponent,
    ReservaFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReservaRoutingModule
  ]
})
export class ReservaModule { }