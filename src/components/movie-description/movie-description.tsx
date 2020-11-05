import React from 'react';
import { selectedMovie } from '../../redux/routing/actions';
import { useDispatch } from 'react-redux';
import { someDescriptionText, releasePlaceholder, toSearch } from './constants';
import { Button } from '../button';
import defaultImage from '../../assets/default-poster.png';
import './movie-description-styles.css';

type MovieDescriptionPropTypes = {
  poster: string;
  title: string;
  year: string;
}

export const MovieDescription: React.FC<MovieDescriptionPropTypes> = ({ poster, title , year}) => {
  const put = useDispatch();

  return (
    <div className='movie-description'>
      <div className='movie-description__poster'>
        <img
          className='poster__image'
          src={(poster && poster !== "N/A") ? poster : defaultImage}
          alt={title}
        />
      </div>
      <div className='movie-description__data'>
        <p className='data__title'>{title}</p>
        <p className='data__year'>{`${releasePlaceholder}: ${year}`}</p>
        <p className='data__text'>{someDescriptionText}</p>
        <Button
          className='data__search-button'
          type='button'
          onClick={() => put(selectedMovie(''))}
        >{toSearch}</Button>
        {/*<Button className='test' type='button' onClick={() => window.location.reload()}>click</Button>*/}
      </div>
    </div>
  )
}