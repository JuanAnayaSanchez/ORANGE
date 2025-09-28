import { Component, OnInit } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  imports: [Menubar, CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[] = [];
  showSplash = true;
  isAnimatingOut = false;

  ngOnInit() {
    this.items = [
      {
        label: 'Nosotros',
        icon: 'pi pi-users',
        routerLink: '/app'
      },
      {
        label: 'Universo',
        icon: 'pi pi-globe',
        routerLink: '/universo' 
      },
      {
        label: 'Portafolio',
        icon: 'pi pi-briefcase',
        routerLink: '/portafolio' 
      },
      {
        label: 'Proyectos',
        icon: 'pi pi-briefcase'
      },
      {
        label: 'Podcasts',
        icon: 'pi pi-microphone'
      }
    ];

    // Iniciar animación de salida después de 2.5 segundos
    setTimeout(() => {
      this.isAnimatingOut = true;
    }, 2500);

    // Ocultar splash después de 3 segundos
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);
  }
}