import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';
import { OutputPropertiesModule } from './output-properties/output-properties.module';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeuFormModule,
    OutputPropertiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
