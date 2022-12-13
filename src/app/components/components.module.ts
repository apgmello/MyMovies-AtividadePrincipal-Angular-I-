import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    MovieItemComponent,
    MovieListComponent,
    MovieCreateComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MovieItemComponent,
    MovieListComponent,
    //MovieCreateComponent
  ],
})
export class ComponentsModule {}
