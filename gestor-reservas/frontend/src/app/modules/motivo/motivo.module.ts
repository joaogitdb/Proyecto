import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MotivoRoutingModule } from './motivo-routing.module';
import { MotivoListComponent } from './components/motivo-list/motivo-list.component';
import { MotivoFormComponent } from './components/motivo-form/motivo-form.component';

@NgModule({
  declarations: [
    MotivoListComponent,
    MotivoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MotivoRoutingModule
  ]
})
export class MotivoModule { }