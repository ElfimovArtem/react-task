import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import { rootReducer } from './root-reducer';
import { history } from '../history';
import { fetchMovieSaga } from './fetch-movie-saga';

const saga = createSagaMiddleware();
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(
  rootReducer(history),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      saga
    )
  )
);

saga.run(fetchMovieSaga);