import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TheaterComponent } from './pages/theater/theater.component';
import { TheatersComponent } from './pages/theaters/theaters.component';

const routes: Routes = [
  { path: 'cinema', children:[
    { path: 'movies/:id', component: MovieComponent },
    { path: 'movies', component: MoviesComponent},
    { path: 'theaters/:id', component: TheaterComponent},
    { path: 'theaters', component: TheatersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemaRoutingModule { }
