// .src/containers/MoviesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import MovieShow from '../components/MovieShow';
import MoviesList from '../components/MoviesList';
import { Route } from 'react-router-dom';
 


const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>}/>
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/>
  </div>
)
 
export default MoviesPage;