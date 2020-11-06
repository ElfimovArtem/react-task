import {
  FetchMoviesActionTypes
} from './action-types';
import { InferValueTypes } from '../utils';
import * as actions from './actions';

type FetchMoviesInitialStateTypes = {
  Response: string | null,
  Error: string | null,
  Search: Array<object> | null,
  totalResults: string | null
}

const fetchMoviesInitialState: FetchMoviesInitialStateTypes = {
  Response: null,
  Error: null,
  Search: null,
  totalResults: null
}
type FetchMoviesActionsTypes = ReturnType<InferValueTypes<typeof actions>>;

export const fetchMoviesReducer = (
  state = fetchMoviesInitialState,
  action: FetchMoviesActionsTypes
): FetchMoviesInitialStateTypes => {
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