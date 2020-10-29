import {
  SEARCH_FILTER_TITLE,
  SEARCH_FILTER_DIRECTOR
} from '../constants';

interface selectPropTypes {
  titleFilterData: string
}

export const selectFilterTitle = (titleFilterData: selectPropTypes) => ({
  type: SEARCH_FILTER_TITLE,
  payload: titleFilterData
});

export const selectFilterDirector = (directorFilterData: selectPropTypes) => ({
  type: SEARCH_FILTER_DIRECTOR,
  payload: directorFilterData
});
