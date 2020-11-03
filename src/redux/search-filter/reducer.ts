import {
  SEARCH_FILTER_TITLE,
  SEARCH_FILTER_DIRECTOR,
  SELECTED_FILTER_STORE_KEY
} from '../../constants';

interface statePropTypes {
  [SELECTED_FILTER_STORE_KEY]: string
}

const filterInitialState = {
  [SELECTED_FILTER_STORE_KEY]: 'title'
};

export const searchFilterReducer = (state: statePropTypes = filterInitialState, {type, payload}) => {
  switch (type) {
    case SEARCH_FILTER_TITLE:
      return {
        ...state,
        [SELECTED_FILTER_STORE_KEY]: payload
      };
    case SEARCH_FILTER_DIRECTOR:
      return {
        ...state,
        [SELECTED_FILTER_STORE_KEY]: payload
      };
    default:
      return state;
  }
};
