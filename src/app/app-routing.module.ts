import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagPrincipalComponent } from './components/pag-principal/pag-principal.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { VinculacionesComponent } from './components/vinculaciones/vinculaciones.component';

const routes: Routes = [
  {path:'PaginaPrincipal',component:PagPrincipalComponent},
  {path:'Proyectos',component:ProyectosComponent},
  {path:'Publicaciones',component:PublicacionesComponent},
  {path:'Vinculaciones',component:VinculacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
