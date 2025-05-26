import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicoRoutingModule } from './medico-routing.module';
import { MedicoListComponent } from './components/medico-list/medico-list.component';
import { MedicoFormComponent } from './components/medico-form/medico-form.component';

@NgModule({
  declarations: [
    MedicoListComponent,
    MedicoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MedicoRoutingModule
  ]
})
export class MedicoModule { }
