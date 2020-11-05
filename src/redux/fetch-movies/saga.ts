import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchMoviesListStart,
  fetchMoviesListFinish,
  fetchMoviesList
} from './actions';
import axios from 'axios';
import {
  apiKey
} from '../../constants';
import { FetchMoviesActionTypes } from './action-types';

function* fetchMoviesWorker({ searchString }: ReturnType<typeof fetchMoviesList>) {
  try {
    yield put(fetchMoviesListStart())
    const response = yield call(getMoviesList, searchString)
    yield put(fetchMoviesListFinish(response));
  } catch (er) {
    console.error(er);
  }
}

const getMoviesList = async (searchString) => {
  const response = await axios.get(`http://www.omdbapi.com/?s=${searchString}${apiKey}`);
  const { data } = response;
  return data;
}

export function* fetchMoviesSaga() {
  yield takeEvery(FetchMoviesActionTypes.FETCH_MOVIES_LIST, fetchMoviesWorker)
}