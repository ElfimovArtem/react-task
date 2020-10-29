import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware() // Допилить сагу!!!
  )
);