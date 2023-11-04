import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { SharedModule } from './shared/shared.module';
import { ServiciosPrestadosComponent } from './Vistas/servicios-prestados/servicios-prestados.component';
import { CatalogoComponent } from './Vistas/catalogo/catalogo.component';
import { EntCatalogoComponent } from './Vistas/ent-catalogo/ent-catalogo.component';
import { EntServiciosComponent } from './Vistas/ent-servicios/ent-servicios.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosPrestadosComponent,
    CatalogoComponent,
    EntServiciosComponent,
    EntCatalogoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
