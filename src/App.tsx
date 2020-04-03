import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/header/header';
import { HomePage } from './pages/home-page/home-page';
import { GlobalStyle } from './components/global-style/global-style';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
};
