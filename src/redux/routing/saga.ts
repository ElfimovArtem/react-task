import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { kebabCase } from 'lodash';
import { SELECTED_MOVIE } from '../../constants';
import { selectedMovie } from './actions';

function* selectedMovieWorker({ movieTitle }: ReturnType<typeof selectedMovie>) {
  try {
    yield put(push(`/movies/${kebabCase(movieTitle)}`))
  } catch (er) {
    console.error(er);
  }
}

export function* selectedMovieSaga() {
  yield takeEvery(SELECTED_MOVIE, selectedMovieWorker)
}