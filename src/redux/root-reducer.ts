import { combineReducers } from 'redux'
import { searchFilterReducer } from './search-filter-reducer';
import { fetchMoviesReducer } from './fetch-movies-reducer';
import {
  SEARCH_FILTER_STORE_KEY,
  MOVIES_STORE_KEY
} from '../constants';

export const rootReducer = combineReducers({
  [SEARCH_FILTER_STORE_KEY]: searchFilterReducer,
  [MOVIES_STORE_KEY]: fetchMoviesReducer
});