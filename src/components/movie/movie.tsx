import * as React from 'react';
import defaultImage from '../../assets/default-poster.png';
import './movie-styles.css';

interface MoviePropTypes {
  title: string;
  poster?: string;
  year: string;
}

export const Movie = (props: MoviePropTypes) => (
  <div className='movie'>
    <div className='movie-poster'>
      <img
        className='movie-poster__image'
        src={props.poster || defaultImage}
        alt={props.title}
      />
    </div>
    <p className='movie-title'>{props.title}</p>
    <p className='movie-year'>{props.year}</p>
  </div>
);
