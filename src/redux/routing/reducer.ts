import { SELECTED_MOVIE } from '../../constants';

const selectedMovieInitialState = {};

export const selectedMovieReducer = (state: any = selectedMovieInitialState, { type, payload }) => {
  switch (type) {
    case SELECTED_MOVIE:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
};