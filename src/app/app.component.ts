import { Component } from '@angular/core';
import { MusicFormComponent } from './components/music-form/music-form.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [NavbarComponent, RouterModule]
})
export class AppComponent {
//  title = 'musical-styles-survey-front';
}
