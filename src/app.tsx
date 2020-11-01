import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Router, Switch, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page';
import { history } from './history';
import { MoviePage } from './pages/movie-page';
import './app-styles.css';

export const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/'>
          <MainPage />
        </Route>
        <Route path='/movies/movie'>
          <MoviePage />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
