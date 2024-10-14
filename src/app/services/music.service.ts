import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MusicStyle } from '../shared/models/music-style';
import { PostResponse } from '../shared/models/post-response';
import { MusicStyleSummary } from '../shared/models/music-style-summary';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private apiUrl = 'http://localhost:8085/musical-styles-survey/api/v1'; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) {}


  getMusicStyles(): Observable<MusicStyle[]> {
    return this.http.get<MusicStyle[]>(`${this.apiUrl}/allMusicStyles`);
  }

  submitMusicChoice(styleId: number, email: string): Observable<PostResponse> {
    return this.http.post<PostResponse>(`${this.apiUrl}/addUserPreference`, {
      styleId,
      email,
    });
  }

  getVoteResults(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/voteResults`);
  }

/*
  // Método dummy que devuelve datos simulados
  getMusicStylesDummy(): Observable<MusicStyle[]> {
    const dummyData: MusicStyle[] = [
      { id: 1, name: 'Rock' },
      { id: 2, name: 'Pop' },
      { id: 3, name: 'Jazz' },
      { id: 4, name: 'Classical' },
      { id: 5, name: 'Electronic' }
    ];
    return of(dummyData); // Retorna un observable con los datos simulados
  }

  // Método dummy que devuelve datos simulados
  submitMusicChoiceDummy(styleId: number, email: string): Observable<PostResponse> {
    const dummyData: PostResponse =
      { statusCode: 0, message: '' }
    ;
    return of(dummyData); // Retorna un observable con los datos simulados
  }

  // Método dummy que devuelve datos simulados
  getVoteResultsDummy(): Observable<MusicStyleSummary[]> {
    const dummyData: MusicStyleSummary[] = [
      { musicStyleId: 1, musicStyleName: 'Rock', summaryOfVotes: 13 },
      { musicStyleId: 2, musicStyleName: 'Pop', summaryOfVotes: 8 },
      { musicStyleId: 3, musicStyleName: 'Jazz', summaryOfVotes: 3 },
      { musicStyleId: 4, musicStyleName: 'Classical', summaryOfVotes: 4 },
      { musicStyleId: 5, musicStyleName: 'Electronic', summaryOfVotes: 5 }
    ];
    return of(dummyData); // Retorna un observable con los datos simulados
  }
    */
}
