import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { ServiciosPrestadosComponent } from './Vistas/servicios-prestados/servicios-prestados.component';
import { EntServiciosComponent } from './Vistas/ent-servicios/ent-servicios.component';
import { CatalogoComponent } from './Vistas/catalogo/catalogo.component';
import { LoginComponent } from './admin/login/login.component';
import { CrudComponent } from './admin/crud/crud.component';
import { EntCatalogoComponent } from './Vistas/ent-catalogo/ent-catalogo.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'servicioprestado',
    component: ServiciosPrestadosComponent,
  },
  {
    path: 'servicio',
    component: EntServiciosComponent,
  },
  {
    path: 'catalogo',
    component: CatalogoComponent,
  },
  {
    path: 'entcatalogo',
    component: EntCatalogoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: CrudComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
