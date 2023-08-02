import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaImagenesComponent } from './galeria-imagenes/galeria-imagenes.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'galeria', component: GaleriaImagenesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
