import {
  FETCH_MOVIES_LIST,
  FETCH_MOVIES_LIST_START,
  FETCH_MOVIES_LIST_FINISH
} from '../../constants';

export const fetchMoviesList = (searchString) => ({
  type: FETCH_MOVIES_LIST,
  searchString
});

export const fetchMoviesListStart = () => {
  return {
    type: FETCH_MOVIES_LIST_START
  }
};

export const fetchMoviesListFinish = (payload) => {
  return {
    type: FETCH_MOVIES_LIST_FINISH,
    payload
  }
};
