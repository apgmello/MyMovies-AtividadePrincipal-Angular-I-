import { Component, Input } from '@angular/core';
import Movie from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent {
  @Input() movie?: Movie;

  constructor() {}

  changeWatched(): void {
    if (this.movie) {
      this.movie.watched = !this.movie?.watched;
    }
  }
}

// @Input() movie : Movie = {
//   id:0,
//   title: 'xxx',
//   description: 'yyyyy',
//   dueDate: new Date,
//   watched: true
//}
