import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Movie } from '../movie';
import { Button } from '../button';
import { addYourMovie } from '../../constants';
import { ApplicationStateTypes } from '../../redux/root-reducer';
import { addMovie } from '../../redux/adding-movie/actions';
import './movie-container-styles.css';

type MovieContainerPropTypes = {
  defaultText: string;
}

export const MovieContainer: React.FC<MovieContainerPropTypes> = ({ defaultText }) => {
  const moviesArray = useSelector((state: ApplicationStateTypes) => state.movies.Search);
  const put = useDispatch();

  return (
    <div className='movie-container'>
      <div className='movie-container__bar'>
        <Button
          className='bar__btn'
          type='button'
          onClick={() => put(addMovie())}
        >{addYourMovie}</Button>
      </div>
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