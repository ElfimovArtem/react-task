import { InferValueTypes } from '../utils';
import { SelectedMovieActionTypes } from './action-types';
import * as actions from './actions';

const selectedMovieInitialState: {} = {};
type SelectedMovieActionsTypes = ReturnType<InferValueTypes<typeof actions>>;

export const selectedMovieReducer = (
  state: {} = selectedMovieInitialState,
  {type, selectedMovieTitle}: SelectedMovieActionsTypes
) => {
  switch (type) {
    case SelectedMovieActionTypes.SELECTED_MOVIE:
      return {
        ...state,
        selectedMovieTitle
      };
    default:
      return state;
  }
};