import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { ApplicationStateTypes } from '../../redux/root-reducer';
import { MovieContainer } from '../../components/movie-container';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { mainTitle, movieContainerDefaultText } from '../../constants';
import { moviePageSelector } from './movie-page-selectors';

export const MoviePage = () => {
  const moviesData = useSelector((state: ApplicationStateTypes) => state);  // Можно заменить на store.getState().
  const selectedMovieData = moviePageSelector(moviesData);

  if (!selectedMovieData) {
    return (<Redirect to='/' />);
  } else {
    return (
      <div className='movie-page'>
        <Header
          headerTitle={mainTitle}
          fullSize={true}
          title={selectedMovieData.Title}
          poster={selectedMovieData.Poster}
          year={selectedMovieData.Year}
        />
        <MovieContainer
          defaultText={movieContainerDefaultText}
        />
        <Footer
          description={mainTitle}
        />
      </div>
    );
  }
}
