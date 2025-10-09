import { Component } from '@angular/core';
import { MainMenuComponent } from '../../shared/main-menu/main-menu.component';
import { ScrollingComponent } from '../../shared/scrolling/scrolling.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-portafolio',
  imports: [MainMenuComponent, ScrollingComponent, FooterComponent],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {

}
