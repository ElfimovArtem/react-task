import { all } from 'redux-saga/effects';
import { fetchMoviesSaga } from './fetch-movies';
import { selectedMovieSaga } from './routing';
import { addMovieSaga } from './adding-movie';

export function* rootSaga() {
  yield all([
    fetchMoviesSaga(),
    selectedMovieSaga(),
    addMovieSaga()
  ]);
}