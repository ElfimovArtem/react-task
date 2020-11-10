import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { AddingMovieActionTypes } from './action-types';
import { addMovie, homeBtnClick } from './actions';

function* addMovieWorker({ btn }: ReturnType<typeof addMovie>) {
  try {
    yield put(push(btn));
  } catch (er) {
    console.error(er);
  }
}

function* homeBtnWorker({ btn }: ReturnType<typeof homeBtnClick>) {
  try {
    yield put(push(btn));
  } catch (er) {
    console.error(er);
  }
}

export function* addMovieSaga() {
  yield takeEvery(AddingMovieActionTypes.ADD_MOVIE, addMovieWorker);
  yield takeEvery(AddingMovieActionTypes.HOME_BTN, homeBtnWorker);
}