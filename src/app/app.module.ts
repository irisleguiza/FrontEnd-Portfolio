import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BannerComponent } from './component/banner/banner.component';
import { AcercadeComponent } from './component/acercade/acercade.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { HardskillComponent } from './component/hardskill/hardskill.component';
import { SoftskillComponent } from './component/softskill/softskill.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AcercadeComponent,
    EducacionComponent,
    HardskillComponent,
    SoftskillComponent,
    ProyectoComponent,
    ExperienciaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
