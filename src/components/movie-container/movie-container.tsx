import * as React from 'react';
import { useSelector } from 'react-redux';
import { Movie } from '../movie';
import { ApplicationStateTypes } from '../../redux/root-reducer';
import './movie-container-styles.css';

type MovieContainerPropTypes = {
  defaultText: string;
}

export const MovieContainer: React.FC<MovieContainerPropTypes> = ({ defaultText }) => {
  const moviesArray = useSelector((state: ApplicationStateTypes) => state.movies.Search)

  return (
    <div className='movie-container'>
      <div className='movie-container__bar'/>
      <div className='movie-container__content'>
        {
          Array.isArray(moviesArray) ?
            moviesArray.map(
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
                {defaultText}
              </p>
            )
        }
      </div>
    </div>
  );
}