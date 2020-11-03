import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { fetchMoviesReducer } from './fetch-movies';
import { searchFilterReducer } from './search-filter';
import {
  SEARCH_FILTER_STORE_KEY,
  MOVIES_STORE_KEY
} from '../constants';

export const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  [SEARCH_FILTER_STORE_KEY]: searchFilterReducer,
  [MOVIES_STORE_KEY]: fetchMoviesReducer
});