import { createSelector } from 'reselect';
import { kebabCase } from 'lodash';
import { ApplicationStateTypes } from '../../redux/root-reducer';
import { replacer } from '../../components/movie-description/constants';

const selectMovieTitleSelector = (state: ApplicationStateTypes) => state.router.location.pathname;
const currentMovieInArrSelector = (state: ApplicationStateTypes) => state.movies.Search;

const selectMovie = createSelector(
  selectMovieTitleSelector,
  title => title.replace(replacer, '')
);

const selectCurrentMovie = createSelector(
  currentMovieInArrSelector,
  movies => movies
);

export const moviePageSelector = createSelector(
  selectMovie,
  selectCurrentMovie,
  (title, moviesArr) => {
    if(moviesArr) {
      return moviesArr.find((movie) => kebabCase(movie.Title) === title);
    }
  }
)