import { Routes } from '@angular/router';
import { MusicFormComponent } from './components/music-form/music-form.component';
import { MusicStatsComponent } from './components/music-stats/music-stats.component';

export const routes: Routes = [
  { path: '', redirectTo: 'music-form', pathMatch: 'full' },
  { path: 'music-form', component: MusicFormComponent },
  { path: 'music-stats', component: MusicStatsComponent },
];
