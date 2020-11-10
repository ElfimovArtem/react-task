import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { MainPage } from './pages/main-page';
import { history } from './history';
import { MoviePage } from './pages/movie-page';
import { AddMoviePage } from './pages/add-movie-page';
import './app-styles.css';

export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          path='/movies/:movieName'
          component={MoviePage}
        />
        <Route
          path='/add-movie'
          component={AddMoviePage}
        />
        <Route
          path='/'
          component={MainPage}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>
);
