import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useAppState } from './hooks/useAppState';
import { checkUserSession } from './store/actions';
import { Header } from './components/header/header';
import { HomePage } from './pages/home-page/home-page';
import { GlobalStyle } from './components/global-style/global-style';

export const App = () => {
  const { dispatch } = useAppState();

  useEffect(() => {
    checkUserSession(dispatch);
  }, [dispatch]);

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