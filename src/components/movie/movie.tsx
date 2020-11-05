import * as React from 'react';
import { selectedMovie } from '../../redux/routing/actions';
import { useDispatch } from 'react-redux';
import defaultImage from '../../assets/default-poster.png';
import './movie-styles.css';

type MoviePropTypes = {
  title: string;
  poster?: string;
  year: string;
}

export const Movie: React.FC<MoviePropTypes> = ({ poster, title, year }) => {
  const put = useDispatch();

  return (
    <div
      className='movie'
      onClick={() => put(selectedMovie(title))}
    >
      <div className='movie-poster'>
        <img
          className='movie-poster__image'
          src={(poster && poster !== "N/A") ? poster : defaultImage}
          alt={title}
        />
      </div>
      <p className='movie-title'>{title}</p>
      <p className='movie-year'>{year}</p>
    </div>
  );
}
