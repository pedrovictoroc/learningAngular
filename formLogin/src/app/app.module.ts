import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormCadastroComponent } from './home/form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './home/form-login/form-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAPIComponent } from './home/list-api/list-api.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormCadastroComponent,
    FormLoginComponent,
    ListAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
