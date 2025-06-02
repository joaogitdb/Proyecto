// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

//import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { PacienteListComponent } from './modules/paciente/components/paciente-list/paciente-list.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { UsuarioListComponent } from './modules/usuario/components/usuario-list/usuario-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    PacienteListComponent         // el componente raíz
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    // routing lazy-loaded
    HttpClientModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right' }),
    NgModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
