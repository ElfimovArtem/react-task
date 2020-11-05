import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { kebabCase } from 'lodash';
import { SelectedMovieActionTypes } from './action-types';
import { selectedMovie } from './actions';

function* selectedMovieWorker({ selectedMovieTitle }: ReturnType<typeof selectedMovie>) {
  try {
    yield put(push(`/movies/${kebabCase(selectedMovieTitle)}`))
  } catch (er) {
    console.error(er);
  }
}

export function* selectedMovieSaga() {
  yield takeEvery(SelectedMovieActionTypes.SELECTED_MOVIE, selectedMovieWorker)
}