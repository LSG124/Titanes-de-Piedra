// titulo-titanes.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-titulo-titanes',
  templateUrl: './titulo-titanes.component.html',
  styleUrls: ['./titulo-titanes.component.less']
})
export class TituloTitanesComponent {
  coloresChispas = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff'];

  obtenerColorChispa(): string {
    const indiceColor = Math.floor(Math.random() * this.coloresChispas.length);
    return this.coloresChispas[indiceColor];
  }

  generarChispa(event: MouseEvent): void {
    const chispa = event.target as HTMLElement;
    chispa.style.left = `${event.offsetX}px`;
    chispa.style.top = `${event.offsetY}px`;
  }
}
