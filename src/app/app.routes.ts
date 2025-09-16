import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UniversoComponent } from './views/universo/universo.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';

export const routes: Routes = [
    { path: 'app', component: NosotrosComponent },
    { path: 'universo', component:  UniversoComponent},
    { path: '', redirectTo: '/app', pathMatch: 'full' },
];
