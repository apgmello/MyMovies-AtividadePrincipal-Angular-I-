import Movie from 'src/app/models/Movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  
  constructor(){
    var moviesJson = localStorage.getItem("movieList");
    var lastId = localStorage.getItem("lastId");

    if(moviesJson) {
      this.movieList = JSON.parse(moviesJson);
    }
    if(lastId) {
      Movie.lastId = +lastId;
    }
  }
  
  saveMovies() {
    localStorage.setItem("movieList", JSON.stringify(this.movieList));
    localStorage.setItem("lastId", Movie.lastId.toString());
  }
  
  movieList: Movie[] = [];

  getMovies(): Movie[] {
    return this.movieList;
  }

  postMovie(movie: Movie) {
    movie.id = Movie.updateLastId();
    this.movieList.push(movie);
    this.saveMovies();
  }

  updateMovie(movie: Movie) {
    const index = this.movieList.findIndex((m) => m.id == movie.id);

    this.movieList[index].title = movie.title;
    this.movieList[index].description = movie.description;
    this.movieList[index].watchedOn = movie.watchedOn;
    this.movieList[index].watched = movie.watched;
    this.saveMovies();
  }

  deleteMovie(id: number) {
    const index = this.movieList.findIndex((movie) => movie.id == id);
    this.movieList.splice(index, 1);
    this.saveMovies();
  }
}
