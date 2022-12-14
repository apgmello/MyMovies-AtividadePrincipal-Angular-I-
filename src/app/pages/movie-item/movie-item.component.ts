import { MovieService } from './../../services/movie.service';
import { Component, Input } from '@angular/core';
import Movie from 'src/app/models/Movie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent {
  @Input() movie?: Movie;

  constructor(private movieService: MovieService) {}

  changeWatched(): void {
    if (this.movie) {
      this.movie.watched = !this.movie?.watched;
      this.movieService.updateMovie(this.movie);
    }
  }

  delete() {
    if (this.movie) {
      Swal.fire({
        title: 'MyMovies',
        text: `Tem certeza que deseja excluir ${this.movie.title}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
      }).then((result) => {
        if (result.value) {
          if (this.movie) {
            this.movieService.deleteMovie(this.movie.id);
            Swal.fire(
              'MyMovies',
              `${this.movie?.title} excluído com sucesso.`,
              'success'
            );
          }
        }
      });
    }
  }
}
