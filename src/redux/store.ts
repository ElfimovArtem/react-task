import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root-reducer';
import { fetchMovieSaga } from './fetch-movie-saga';

const saga = createSagaMiddleware();
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(saga)
  )
);

saga.run(fetchMovieSaga);