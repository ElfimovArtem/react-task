import { SELECTED_FILTER_STORE_KEY } from '../../constants';
import { InferValueTypes } from '../utils';
import * as actions from './actions';
import { SelectedFilterActionTypes } from './action-types';

type SelectedFilterActionsTypes = ReturnType<InferValueTypes<typeof actions>>;
type statePropTypes = {
  [SELECTED_FILTER_STORE_KEY]: string
}

const filterInitialState: statePropTypes = {
  [SELECTED_FILTER_STORE_KEY]: 'title'
};

export const searchFilterReducer = (
  state = filterInitialState,
  {type, payload}: SelectedFilterActionsTypes
): statePropTypes => {
  switch (type) {
    case SelectedFilterActionTypes.SEARCH_FILTER_TITLE:
      return {
        ...state,
        [SELECTED_FILTER_STORE_KEY]: payload
      };
    case SelectedFilterActionTypes.SEARCH_FILTER_DIRECTOR:
      return {
        ...state,
        [SELECTED_FILTER_STORE_KEY]: payload
      };
    default:
      return state;
  }
};
