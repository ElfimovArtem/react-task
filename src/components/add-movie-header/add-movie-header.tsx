import React from 'react';
import { useDispatch } from 'react-redux';
import { mainTitle } from '../../constants';
import { Button } from '../button';
import { homeBtnClick } from '../../redux/adding-movie/actions';
import './add-movie-header-styles.css';

export const AddMovieHeader = () => {
  const put = useDispatch();

  return (
    <div className='add-movie-page__bar'>
      <p className='bar__title'>{mainTitle}</p>
      <Button
        className='bar__home-btn'
        type='button'
        onClick={() => put(homeBtnClick())}
      >Home</Button>
    </div>
  )
}