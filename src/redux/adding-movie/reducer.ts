import { InferValueTypes } from '../utils';
import { AddingMovieActionTypes } from './action-types';
import * as actions from './actions';

const addingMovieInitialState: {} = {};
type AddingMovieActionsTypes = ReturnType<InferValueTypes<typeof actions>>;

export const selectedMovieReducer = (
  state: {} = addingMovieInitialState,
  {type, btn}: AddingMovieActionsTypes
) => {
  switch (type) {
    case AddingMovieActionTypes.ADD_MOVIE:
      return {
        ...state,
        btn
      };
    case AddingMovieActionTypes.HOME_BTN:
      return {
        ...state,
        btn
      };
    default:
      return state;
  }
};