// menu.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {
  constructor(private router: Router) { }

  // Método para manejar la navegación al hacer clic en un botón del menú
  navegar(ruta: string): void {
    this.router.navigateByUrl(ruta);
  }
  
}
