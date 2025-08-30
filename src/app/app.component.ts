import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainMenuComponent} from './shared/main-menu/main-menu.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'orange';
}
