import * as React from 'react';
import { Footer } from '../../components/footer';
import { MovieContainer } from '../../components/movie-container';
import {
  mainTitle,
  movieContainerDefaultText
} from '../../constants';
import {Header} from '../../components/header';

export const MainPage = () => (
  <div className='main-page'>
    <Header headerTitle={mainTitle} />
    <MovieContainer
      defaultText={movieContainerDefaultText}
    />
    <Footer
      description={mainTitle}
    />
  </div>
);