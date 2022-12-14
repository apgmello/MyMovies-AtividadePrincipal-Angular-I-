import { SharedModule } from '../shared/shared.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieItemComponent,
    MovieListComponent,
    MovieCreateComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule, ReactiveFormsModule],
  exports: [
    MovieItemComponent,
    MovieListComponent,
    //MovieCreateComponent
  ],
})
export class ComponentsModule {}
