import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import { checkLoginHelper } from './check.login.helper';

type Props = {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
} & RouteProps;

export function AuthRouteHelper({ component: Component, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={props => checkLoginHelper() ?
        <Component {...props} /> :
        <Redirect to={{ pathname: '/login' }}/>
      }
    />
  );
}
