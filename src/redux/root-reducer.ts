import { combineReducers } from 'redux'
import { SEARCH_FILTER_STORE_KEY } from '../constants';
import { searchFilterReducer } from './search-filter-reducer';

export const rootReducer = combineReducers({
  [SEARCH_FILTER_STORE_KEY]: searchFilterReducer
});