import { Routes } from '@angular/router';

import { UsuarioNuevoHijaComponent } from './usuario-nuevo-hija/usuario-nuevo-hija.component';
import { UsuarioEditarHijaComponent } from './usuario-editar-hija/usuario-editar-hija.component';
import { UsuarioDetalleHijaComponent } from './usuario-detalle-hija/usuario-detalle-hija.component';

export const USUARIO_ROUTES: Routes = [

    { path: 'nuevoH', component: UsuarioNuevoHijaComponent},
    { path: 'editarH', component: UsuarioEditarHijaComponent},
    { path: 'detalleH', component: UsuarioDetalleHijaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'nuevoH'}  //Cualquier otra cosa que no sean las anteriores descrita nos llevará a usuarioNuevoHija

];








