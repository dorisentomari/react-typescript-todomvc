import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import checkLogin from './checkLogin';

type Props = {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
} & RouteProps;

function AuthRoute({ component: Component, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={props => checkLogin() ?
        <Component {...props} /> :
        <Redirect to={{ pathname: '/login' }}/>
      }
    />
  );
}

export default AuthRoute;
