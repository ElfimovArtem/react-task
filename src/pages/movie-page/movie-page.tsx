import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { moviePageSelector } from './movie-page-selectors';
import { Header } from '../../components/header';

export const MoviePage = () => {
  const moviesData = useSelector(state => state);  // Можно заменить на store.getState().
  const selectedMovie = moviePageSelector(moviesData);

  if (!selectedMovie) {
    return (<Redirect to='/' />);
  } else {
    return (
      <div>
        <Header headerTitle={selectedMovie.Title} />
      </div>
    );
  }
}
