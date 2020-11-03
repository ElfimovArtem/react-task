import * as React from 'react';
import { Header } from '../../components/header';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const MoviePage = () => {
  const currentMovie = useSelector(state => state.movies.Search[0]) //Нужен выбор конкретного фильма
  console.log(currentMovie);

  return (
    currentMovie ? (
      <div>
        <Header headerTitle={currentMovie.Title} />
      </div>
    ) : (<Redirect to="/" />)
  );
}
