import {
  FETCH_MOVIES_LIST_FINISH
} from '../../constants';

const fetchMoviesInitialState = {}

export const fetchMoviesReducer = (state: any = fetchMoviesInitialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_LIST_FINISH:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};