import { SelectedMovieActionTypes } from './action-types';

export const selectedMovie = (selectedMovieTitle: string) => ({
  type: SelectedMovieActionTypes.SELECTED_MOVIE,
  selectedMovieTitle
});
