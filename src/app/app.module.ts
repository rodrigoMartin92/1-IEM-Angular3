import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyFooterComponent } from './components/body-footer/body-footer.component';
import { BodyHeaderComponent } from './components/body-header/body-header.component';
import { BodyMainComponent } from './components/body-main/body-main.component';
import { PagPrincipalComponent } from './components/pag-principal/pag-principal.component';
import { PagPrincipalAgendaComponent } from './components/pag-principal-agenda/pag-principal-agenda.component';
import { PagPrincipalAutoridadesComponent } from './components/pag-principal-autoridades/pag-principal-autoridades.component';
import { PagPrincipalInvestigadoresComponent } from './components/pag-principal-investigadores/pag-principal-investigadores.component';
import { PagPrincipalJornadasComponent } from './components/pag-principal-jornadas/pag-principal-jornadas.component';
import { PagPrincipalObjetivosComponent } from './components/pag-principal-objetivos/pag-principal-objetivos.component';
import { PagPrincipalQueEsIemComponent } from './components/pag-principal-que-es-iem/pag-principal-que-es-iem.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectosDe2016a2017Component } from './components/proyectos-de2016a2017/proyectos-de2016a2017.component';
import { ProyectosDe2016a2017P1Component } from './components/proyectos-de2016a2017-p1/proyectos-de2016a2017-p1.component';
import { ProyectosDe2016a2017P2Component } from './components/proyectos-de2016a2017-p2/proyectos-de2016a2017-p2.component';
import { ProyectosDe2016a2017P3Component } from './components/proyectos-de2016a2017-p3/proyectos-de2016a2017-p3.component';
import { ProyectosDe2016a2017P4Component } from './components/proyectos-de2016a2017-p4/proyectos-de2016a2017-p4.component';
import { ProyectosDe2016a2017P5Component } from './components/proyectos-de2016a2017-p5/proyectos-de2016a2017-p5.component';
import { ProyectosDe2016a2017P6Component } from './components/proyectos-de2016a2017-p6/proyectos-de2016a2017-p6.component';
import { ProyectosDe2016a2017P7Component } from './components/proyectos-de2016a2017-p7/proyectos-de2016a2017-p7.component';
import { ProyectosDe2016a2017P8Component } from './components/proyectos-de2016a2017-p8/proyectos-de2016a2017-p8.component';
import { ProyectosDe2016a2017P9Component } from './components/proyectos-de2016a2017-p9/proyectos-de2016a2017-p9.component';
import { ProyectosDe2018a2019Component } from './components/proyectos-de2018a2019/proyectos-de2018a2019.component';
import { ProyectosDe2018a2019P1Component } from './components/proyectos-de2018a2019-p1/proyectos-de2018a2019-p1.component';
import { ProyectosDe2018a2019P2Component } from './components/proyectos-de2018a2019-p2/proyectos-de2018a2019-p2.component';
import { ProyectosDe2018a2019P3Component } from './components/proyectos-de2018a2019-p3/proyectos-de2018a2019-p3.component';
import { ProyectosDe2018a2019P4Component } from './components/proyectos-de2018a2019-p4/proyectos-de2018a2019-p4.component';
import { ProyectosDe2018a2019P5Component } from './components/proyectos-de2018a2019-p5/proyectos-de2018a2019-p5.component';
import { ProyectosDe2018a2019P6Component } from './components/proyectos-de2018a2019-p6/proyectos-de2018a2019-p6.component';
import { ProyectosDe2018a2019P7Component } from './components/proyectos-de2018a2019-p7/proyectos-de2018a2019-p7.component';
import { ProyectosDe2018a2019P8Component } from './components/proyectos-de2018a2019-p8/proyectos-de2018a2019-p8.component';
import { ProyectosDe2020a2022Component } from './components/proyectos-de2020a2022/proyectos-de2020a2022.component';
import { ProyectosDe2020a2022P1Component } from './components/proyectos-de2020a2022-p1/proyectos-de2020a2022-p1.component';
import { ProyectosDe2020a2022P2Component } from './components/proyectos-de2020a2022-p2/proyectos-de2020a2022-p2.component';
import { ProyectosDe2020a2022P3Component } from './components/proyectos-de2020a2022-p3/proyectos-de2020a2022-p3.component';
import { ProyectosDe2020a2022P4Component } from './components/proyectos-de2020a2022-p4/proyectos-de2020a2022-p4.component';
import { ProyectosDe2020a2022P5Component } from './components/proyectos-de2020a2022-p5/proyectos-de2020a2022-p5.component';
import { ProyectosDe2020a2022P6Component } from './components/proyectos-de2020a2022-p6/proyectos-de2020a2022-p6.component';
import { ProyectosDe2020a2022P7Component } from './components/proyectos-de2020a2022-p7/proyectos-de2020a2022-p7.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { PublicacionesCompactDisc1Component } from './components/publicaciones-compact-disc1/publicaciones-compact-disc1.component';
import { PublicacionesLibro1Component } from './components/publicaciones-libro1/publicaciones-libro1.component';
import { PublicacionesLibro2Component } from './components/publicaciones-libro2/publicaciones-libro2.component';
import { PublicacionesLibro3Component } from './components/publicaciones-libro3/publicaciones-libro3.component';
import { PublicacionesPartituraDigital1Component } from './components/publicaciones-partitura-digital1/publicaciones-partitura-digital1.component';
import { PublicacionesPartitura1Component } from './components/publicaciones-partitura1/publicaciones-partitura1.component';
import { PublicacionesPartitura2Component } from './components/publicaciones-partitura2/publicaciones-partitura2.component';
import { PublicacionesPartitura3Component } from './components/publicaciones-partitura3/publicaciones-partitura3.component';
import { PublicacionesPartitura4Component } from './components/publicaciones-partitura4/publicaciones-partitura4.component';
import { PublicacionesPartitura5Component } from './components/publicaciones-partitura5/publicaciones-partitura5.component';
import { VinculacionesComponent } from './components/vinculaciones/vinculaciones.component';
import { VinculacionesContenido1Component } from './components/vinculaciones-contenido1/vinculaciones-contenido1.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyFooterComponent,
    BodyHeaderComponent,
    BodyMainComponent,
    PagPrincipalComponent,
    PagPrincipalAgendaComponent,
    PagPrincipalAutoridadesComponent,
    PagPrincipalInvestigadoresComponent,
    PagPrincipalJornadasComponent,
    PagPrincipalObjetivosComponent,
    PagPrincipalQueEsIemComponent,
    ProyectosComponent,
    ProyectosDe2016a2017Component,
    ProyectosDe2016a2017P1Component,
    ProyectosDe2016a2017P2Component,
    ProyectosDe2016a2017P3Component,
    ProyectosDe2016a2017P4Component,
    ProyectosDe2016a2017P5Component,
    ProyectosDe2016a2017P6Component,
    ProyectosDe2016a2017P7Component,
    ProyectosDe2016a2017P8Component,
    ProyectosDe2016a2017P9Component,
    ProyectosDe2018a2019Component,
    ProyectosDe2018a2019P1Component,
    ProyectosDe2018a2019P2Component,
    ProyectosDe2018a2019P3Component,
    ProyectosDe2018a2019P4Component,
    ProyectosDe2018a2019P5Component,
    ProyectosDe2018a2019P6Component,
    ProyectosDe2018a2019P7Component,
    ProyectosDe2018a2019P8Component,
    ProyectosDe2020a2022Component,
    ProyectosDe2020a2022P1Component,
    ProyectosDe2020a2022P2Component,
    ProyectosDe2020a2022P3Component,
    ProyectosDe2020a2022P4Component,
    ProyectosDe2020a2022P5Component,
    ProyectosDe2020a2022P6Component,
    ProyectosDe2020a2022P7Component,
    PublicacionesComponent,
    PublicacionesCompactDisc1Component,
    PublicacionesLibro1Component,
    PublicacionesLibro2Component,
    PublicacionesLibro3Component,
    PublicacionesPartituraDigital1Component,
    PublicacionesPartitura1Component,
    PublicacionesPartitura2Component,
    PublicacionesPartitura3Component,
    PublicacionesPartitura4Component,
    PublicacionesPartitura5Component,
    VinculacionesComponent,
    VinculacionesContenido1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
