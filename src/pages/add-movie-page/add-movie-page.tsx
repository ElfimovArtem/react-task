import React from 'react';
import { Footer } from '../../components/footer';
import { mainTitle } from '../../constants';
import { AddMovieHeader } from '../../components/add-movie-header';
import { AddMovieForm } from '../../components/add-movie-form';

export const AddMoviePage = () => (
  <div className='add-movie-page'>
    <AddMovieHeader />
    <AddMovieForm />
    <Footer
      description={mainTitle}
    />
  </div>
  );