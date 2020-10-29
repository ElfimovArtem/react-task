import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { MainPage } from './pages/main-page';
import './app-styles.css';

export const App: React.FC = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);
