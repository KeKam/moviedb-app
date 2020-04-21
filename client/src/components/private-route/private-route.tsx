import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAppState } from '../../hooks/useAppState';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
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
