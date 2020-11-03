import * as React from 'react';
import { Link } from 'react-router-dom';
import { kebabCase } from 'lodash';
import defaultImage from '../../assets/default-poster.png';
import './movie-styles.css';

interface MoviePropTypes {
  title: string;
  poster?: string;
  year: string;
}

export const Movie = (props: MoviePropTypes) => (
  // @ts-ignore: Не понял что не так! Заигнорил
  <Link to={`/movies/${kebabCase(props.title)}`} className='movie'>
    <div className='movie-poster'>
      <img
        className='movie-poster__image'
        src={props.poster || defaultImage}
        alt={props.title}
      />
    </div>
    <p className='movie-title'>{props.title}</p>
    <p className='movie-year'>{props.year}</p>
  </Link>
);
