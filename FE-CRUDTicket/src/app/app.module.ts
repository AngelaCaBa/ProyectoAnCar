import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NuevoticketComponent } from './components/nuevoticket/nuevoticket.component';
import { ListadoticketComponent } from './components/listadoticket/listadoticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulos
import { SharedModule } from './shared/shared.module';
import { VerticketComponent } from './components/verticket/verticket.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NuevoticketComponent,
    ListadoticketComponent,
    VerticketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
