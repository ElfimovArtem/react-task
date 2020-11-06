import { combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { fetchMoviesReducer, FetchMoviesReducerTypes } from './fetch-movies';
import { searchFilterReducer, SearchFilterReducerTypes } from './search-filter';
import {
  SEARCH_FILTER_STORE_KEY,
  MOVIES_STORE_KEY
} from '../constants';

export type ApplicationStateTypes = {
  [SEARCH_FILTER_STORE_KEY]: SearchFilterReducerTypes,
  [MOVIES_STORE_KEY]: FetchMoviesReducerTypes,
  router: RouterState
};

export const rootReducer = (history: History): Reducer<ApplicationStateTypes> => combineReducers<ApplicationStateTypes>({
  router: connectRouter(history),
  [SEARCH_FILTER_STORE_KEY]: searchFilterReducer,
  [MOVIES_STORE_KEY]: fetchMoviesReducer
});
