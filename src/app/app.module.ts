import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { TituloTitanesComponent } from './titulo-titanes/titulo-titanes.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaImagenesComponent } from './galeria-imagenes/galeria-imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    TituloTitanesComponent,
    HomeComponent,
    MenuComponent,
    InicioComponent,
    AcercaDeComponent,
    ContactoComponent,
    FooterComponent,
    GaleriaImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
