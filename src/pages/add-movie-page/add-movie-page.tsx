import React from 'react';
import { Footer } from '../../components/footer';
import { mainTitle } from '../../constants';
import { Button } from '../../components/button';
import { homeBtnClick } from '../../redux/adding-movie/actions';
import { useDispatch } from 'react-redux';

export const AddMoviePage = () => {

  const put = useDispatch();

  return (
    <div className='add-movie-page'>
      <div>Здесь будет форма</div>
      <Button
        className='home-btn'
        type='button'
        onClick={() => put(homeBtnClick())}
      >Home</Button>
      <Footer
        description={mainTitle}
      />
    </div>
  )
};