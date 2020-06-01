import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useAppState } from './hooks/useAppState';
import { checkUserSession } from './store/actions';
import { Header } from './components/header/header';
import { PrivateRoute } from './components/private-route/private-route';
import { Spinner } from './components/spinner/spinner';
import { GlobalStyle } from './components/global-style/global-style';

const HomePage = lazy(() =>
  import('./pages/home-page/home-page').then((module) => ({
    default: module.HomePage,
  }))
);

const MovieDetailsPage = lazy(() =>
  import('./pages/movie-details-page/movie-details-page').then((module) => ({
    default: module.MovieDetailsPage,
  }))
);

const FavouritesPage = lazy(() =>
  import('./pages/favourites-page/favourites-page').then((module) => ({
    default: module.FavouritesPage,
  }))
);

export const App = (): JSX.Element => {
  const { dispatch } = useAppState();

  useEffect(() => {
    checkUserSession(dispatch);
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/details/:id' component={MovieDetailsPage} />
          <PrivateRoute exact path='/favourites' component={FavouritesPage} />
          <PrivateRoute
            exact
            path='/favourites/details/:id'
            component={MovieDetailsPage}
          />
        </Suspense>
      </Switch>
    </>
  );
};
