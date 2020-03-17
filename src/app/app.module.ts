import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { ComunicadoService } from './comunicado.service';
import { HttpClientModule } from '@angular/common/http';
import { ComunicadosComponent } from './comunicados/comunicados.component';
import { DatosComponent } from './datos/datos.component';
import { ComunPipe } from './comun.pipe';

import { NgPipesModule } from 'ngx-pipes';
import { ComunicadosPipe } from './pipes/comunicados.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComunicadosComponent,
    DatosComponent,
    ComunPipe,
    ComunicadosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgPipesModule
  ],
  providers: [ComunicadoService, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
