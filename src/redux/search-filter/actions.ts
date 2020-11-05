import {
  SelectedFilterActionTypes
} from './action-types';

export const selectFilterTitle = (titleFilterData: string) => ({
  type: SelectedFilterActionTypes.SEARCH_FILTER_TITLE,
  payload: titleFilterData
});

export const selectFilterDirector = (directorFilterData: string) => ({
  type: SelectedFilterActionTypes.SEARCH_FILTER_DIRECTOR,
  payload: directorFilterData
});
