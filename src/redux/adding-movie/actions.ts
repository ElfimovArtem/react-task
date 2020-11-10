import {
  AddingMovieActionTypes,
  ADD_MOVIE_STORE_KEY,
  HOME_STORE_KEY
} from './action-types';

export const addMovie = () => ({
  type: AddingMovieActionTypes.ADD_MOVIE,
  btn: ADD_MOVIE_STORE_KEY
});

export const homeBtnClick = () => ({
  type: AddingMovieActionTypes.HOME_BTN,
  btn: HOME_STORE_KEY
})