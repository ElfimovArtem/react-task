import {
  FetchMoviesActionTypes
} from './action-types';
import { InferValueTypes } from '../utils';
import * as actions from './actions';

type SearchObjectType = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

const fetchMoviesInitialState = {
  Response: null as string,
  Error: null as string,
  Search: null as Array<SearchObjectType>,
  totalResults: null as string,
}

type FetchMoviesInitialStateTypes = typeof fetchMoviesInitialState;
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