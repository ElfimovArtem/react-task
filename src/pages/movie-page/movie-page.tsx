import * as React from 'react';
import { Header } from '../../components/header';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

export const MoviePage = () => {
  const currentMovie = useSelector(state => {
    if (state) {
      return state.movies.Search //Нужен выбор конкретного фильма
    }
  });
  console.log(currentMovie);

  if (!currentMovie) {
    return (<Redirect to='/' />);
  } else {
    return (
      <div>
        <Header headerTitle={currentMovie[0].Title} />
      </div>
    );
  }
}
