import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainMenuComponent} from './shared/main-menu/main-menu.component'
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typewriter', { static: false }) typewriterElement!: ElementRef;
  private typed?: Typed;

  ngAfterViewInit(): void {
    const options = {
      strings: [
        'El marketing y el deporte se unen con propósito: construir un futuro sostenible donde cada logro inspire a la comunidad.',
        'Creemos en la magia del deporte y en el poder del marketing para hacerlo crecer de manera sostenible, conectando marcas, atletas y personas.'
      ],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true
    };

    this.typed = new Typed(this.typewriterElement.nativeElement, options);
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
  }
}
