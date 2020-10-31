import * as React from 'react';
import { useSelector } from 'react-redux';
import { Movie } from '../movie';
import './movie-container-styles.css';

interface MovieContainerPropTypes {
  defaultText: string;
}

export const MovieContainer = (props: MovieContainerPropTypes) => {
  const moviesList = useSelector(state => state.movies.Search)

  return (
    <div className='movie-container'>
      <div className='movie-container__bar'/>
      <div className='movie-container__content'>
        {
          Array.isArray(moviesList) ?
            moviesList.map(
              movie => (
                <Movie
                  title={movie.Title}
                  year={movie.Year}
                  key={movie.imdbID}
                  poster={movie.Poster}
                />
              )
            ) : (
              <p className='content__default-text'>
                {props.defaultText}
              </p>
            )
        }
      </div>
    </div>
  );
}