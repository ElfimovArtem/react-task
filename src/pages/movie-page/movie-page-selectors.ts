import { createSelector } from 'reselect';
import { replacer } from '../../constants';
import { kebabCase } from 'lodash';

const selectMovieTitleSelector = state => state.router.location.pathname;
const currentMovieInArrSelector = state => state.movies.Search;

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