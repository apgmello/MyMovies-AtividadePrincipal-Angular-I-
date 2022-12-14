import { Component } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { MovieService } from './../../services/movie.service';
import Movie from 'src/app/models/Movie';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
})
export class MovieCreateComponent {
  newMovie: Movie = new Movie('');

  movieForm?: FormGroup;

  constructor(private movieService: MovieService) {}

  newForm() {
    return (this.movieForm = new FormGroup({
      title: new FormControl(this.newMovie.title),
      description: new FormControl(this.newMovie.description),
      watchedOn: new FormControl(this.newMovie.watchedOn),
      watched: new FormControl(this.newMovie.watched),
    }));
  }

  ngOnInit() {
    this.movieForm = this.newForm();
  }

  onSubmitForm() {
    this.movieForm?.patchValue({
      title: this.movieForm?.controls['title'].value,
      description: this.movieForm?.controls['description'].value,
      watchedOn: new Date(this.movieForm?.controls['watchedOn'].value),
      watched: this.movieForm?.controls['watched'].value,
    });

    this.newMovie = { id: this.newMovie.id, ...this.movieForm?.value };

    console.log(this.newMovie);

    if (this.newMovie.title === '') {
      Swal.fire('O campo título é obrigatório!');
    } else {
      this.movieService.postMovie(this.newMovie);

      Swal.fire('Filme adicionado com sucesso!').then((_) => {
        this.newMovie = new Movie('');
        this.movieForm = this.newForm();
      });
    }
  }
}
