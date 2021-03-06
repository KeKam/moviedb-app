import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useAppState, useAppDispatch } from '../../contexts/app.context';
import { checkUserSession } from '../../actions/user.actions';
import { startFetchSearchMovies } from '../../actions/movie.actions';
import { Header } from '../header/header';
import { PrivateRoute } from '../private-route/private-route';
import { Spinner } from '../spinner/spinner';
import { GlobalStyle } from '../global-style/global-style';

const HomePage = lazy(() =>
  import('../../pages/home-page/home-page').then((module) => ({
    default: module.HomePage,
  }))
);

const MovieDetailsPage = lazy(() =>
  import('../../pages/movie-details-page/movie-details-page').then(
    (module) => ({
      default: module.MovieDetailsPage,
    })
  )
);

const FavouritesPage = lazy(() =>
  import('../../pages/favourites-page/favourites-page').then((module) => ({
    default: module.FavouritesPage,
  }))
);

export const App = () => {
  const { searchTerm, page } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkUserSession(dispatch);
  }, [dispatch]);

  useEffect(() => {
    startFetchSearchMovies(searchTerm, page, dispatch);
  }, [searchTerm, page, dispatch]);

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
