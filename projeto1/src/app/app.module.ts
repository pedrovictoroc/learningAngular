import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeiroComponente } from './primeiro-componente/primeiro.componente';
import { CursosModule } from "./cursos/cursos.module";

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponente

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
