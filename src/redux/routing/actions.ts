import { SELECTED_MOVIE } from '../../constants';

export const selectedMovie = (movieTitle) => ({
  type: SELECTED_MOVIE,
  movieTitle
});
