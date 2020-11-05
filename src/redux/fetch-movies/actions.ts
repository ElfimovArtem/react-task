import {
  FetchMoviesActionTypes
} from './action-types';

export const fetchMoviesListStart = () => ({
  type: FetchMoviesActionTypes.FETCH_MOVIES_LIST_START
});

export const fetchMoviesList = (searchString: string) => ({
  type: FetchMoviesActionTypes.FETCH_MOVIES_LIST,
  searchString
});

export const fetchMoviesListFinish = (moviesList: {}) => ({
  type: FetchMoviesActionTypes.FETCH_MOVIES_LIST_FINISH,
  moviesList
});