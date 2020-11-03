import { all } from 'redux-saga/effects';
import { fetchMoviesSaga } from './fetch-movies';
import { selectedMovieSaga } from './routing';

export function* rootSaga() {
  yield all([
    fetchMoviesSaga(),
    selectedMovieSaga()
  ]);
}