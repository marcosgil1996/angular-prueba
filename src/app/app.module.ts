import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { LoginComponent } from './componentes/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ServicioLoginService } from './servicios/servicio-login.service';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { ServicioService } from './servicios/servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServicioLoginService, ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
