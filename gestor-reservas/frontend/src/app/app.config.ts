import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

export const appConfig = {
  providers: [
    importProvidersFrom(BrowserAnimationsModule, ToastrModule.forRoot({ positionClass: 'toast-top-right' })),
    importProvidersFrom(HttpClientModule),
    //provideRouter(routes)    // ← aquí añades el router
  ]
};