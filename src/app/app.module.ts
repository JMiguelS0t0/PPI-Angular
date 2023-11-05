import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './admin/crud/crud.component';
import { vistasModule } from './Vistas/vistas.module';

@NgModule({
  declarations: [AppComponent, CrudComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    vistasModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
