import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  title = 'piedras';
  colores = ['#f00', '#0f0', '#00f', '#ff0']; // Puedes agregar más colores aquí
  fondoActual = this.colores[0];
  index = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.colores.length;
      this.fondoActual = this.colores[this.index];
    }, 2000); // 2000 milisegundos = 2 segundos
  }
}

