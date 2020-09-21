import React, { ComponentType } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAppState } from '../../contexts/app.context';

interface PrivateRouteProps extends RouteProps {
  component: ComponentType<any>;
}

export const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const { currentUser } = useAppState();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};
