import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../Models/Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [];
  constructor(private http:HttpClient) { }
  private apiKey = '7851bcdb27413574c1b59ab3847d879c';
  private baseUrl = 'https://api.themoviedb.org/3/movie/top_rated';

  getPopularSeries(): Observable<{ results:Movie[] }> {
  
    const url = `${this.baseUrl}?api_key=${this.apiKey}&language=es-ES&page=1`;
    return this.http.get<{ results: Movie[] }>(url);
  }
}
