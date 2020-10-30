import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchMoviesListStart,
  fetchMoviesListFinish,
  fetchMoviesList
} from './fetch-movies-actions';
import axios from 'axios';
import {
  apiKey,
  FETCH_MOVIES_LIST
} from '../constants';

function* sagaWorker({ searchString }: ReturnType<typeof fetchMoviesList>) {
  try {
    yield put(fetchMoviesListStart())
    const payload = yield call(getMoviesList, searchString)
    yield put(fetchMoviesListFinish(payload));
  } catch (er) {
    console.error(er);
  }
}

const getMoviesList = async (searchString) => {
  const response = await axios.get(`http://www.omdbapi.com/?s=${searchString}${apiKey}`);
  const { data } = response;
  return data;
}

export function* fetchMovieSaga() {
  yield takeEvery(FETCH_MOVIES_LIST, sagaWorker)
}