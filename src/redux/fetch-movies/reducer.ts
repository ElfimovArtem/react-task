import {
  FetchMoviesActionTypes
} from './action-types';
import { InferValueTypes } from '../utils';
import * as actions from './actions';

const fetchMoviesInitialState = {}
type FetchMoviesActionsTypes = ReturnType<InferValueTypes<typeof actions>>;

export const fetchMoviesReducer = (
  state: {} = fetchMoviesInitialState,
  action: FetchMoviesActionsTypes
) => {
  switch (action.type) {
    case FetchMoviesActionTypes.FETCH_MOVIES_LIST_FINISH:
      return {
        ...state,
        ...action.moviesList
      };
    default:
      return state;
  }
};