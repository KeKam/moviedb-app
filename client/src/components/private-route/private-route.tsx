import React, { ComponentType } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAppState } from '../../hooks/use-app-state';

interface PrivateRouteProps extends RouteProps {
  component: ComponentType<any>;
}

export const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps): JSX.Element => {
  const { state } = useAppState();
  const { currentUser } = state;

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};
