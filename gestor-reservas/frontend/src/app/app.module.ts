// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent         // el componente raíz
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    // routing lazy-loaded
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right' }),
    NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
