import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Movie } from '../../Models/Movie';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { ModalLoginComponent } from '../modal-login/modal-login.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, ModalLoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  movies: Movie[] = [];
  isVisible = false; // Variable para controlar la visibilidad
  constructor(private http: HttpClient, private router: Router, private MoviesService: MoviesService){}

  ngOnInit(): void {
    this.fetchPopularSeries();
  }

  fetchPopularSeries(){
    this.MoviesService.getPopularSeries().subscribe
    (response =>{
      this.movies = response.results;
    })
  }


  toggleMovies() {
    this.isVisible = !this.isVisible; 
   // Cambia el estado de visibilidad
  }

  




}
