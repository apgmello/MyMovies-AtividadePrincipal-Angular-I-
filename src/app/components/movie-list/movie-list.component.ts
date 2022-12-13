import { Component, OnChanges, OnInit } from '@angular/core';
import Movie from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnChanges {
  movieList: Movie[] = [
    {
      id: 1,
      title: 'Filme 1',
      description: 'o filme era x',
      dueDate: new Date(),
      watched: false,
    },
    {
      id: 2,
      title: 'Filme 2',
      description: 'o filme era x',
      dueDate: new Date(),
      watched: false,
    },
    {
      id: 3,
      title: 'Filme 3',
      description: 'o filme era x',
      dueDate: new Date(),
      watched: false,
    },
    {
      id: 4,
      title: 'Filme 4',
      dueDate: new Date(),
      watched: false,
    },
  ];

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }
}
