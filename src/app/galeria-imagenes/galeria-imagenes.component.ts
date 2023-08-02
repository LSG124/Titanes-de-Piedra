import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-imagenes',
  templateUrl: './galeria-imagenes.component.html',
  styleUrls: ['./galeria-imagenes.component.less']
})
export class GaleriaImagenesComponent {
  imagenes: string[] = [
    'assets/imagenes/imagen1.png',
    'assets/imagenes/imagen2.png',
    'assets/imagenes/imagen3.png',
    'assets/imagenes/imagen4.png',
    'assets/imagenes/imagen5.png',
    'assets/imagenes/imagen6.png',
    'assets/imagenes/imagen7.png',
    'assets/imagenes/imagen8.png',
    'assets/imagenes/imagen9.png',
    'assets/imagenes/imagen10.png',
  ];
  indiceInicial: number = 0;

  avanzar() {
    this.indiceInicial = (this.indiceInicial + 1) % this.imagenes.length;
  }

  retroceder() {
    this.indiceInicial = (this.indiceInicial - 1 + this.imagenes.length) % this.imagenes.length;
  }
}
