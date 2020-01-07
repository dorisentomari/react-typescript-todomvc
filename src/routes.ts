import React from 'react';
import Home from './pages/home';
import User from './pages/user';
import { RouteComponentProps } from 'react-router';

interface Routes {
  name: string;
  to: string;
  exact: boolean;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const routes: Array<Routes> = [
  {
    name: 'home',
    to: '/',
    exact: true,
    component: Home
  },
  {
    name: 'user',
    to: '/user',
    exact: true,
    component: User
  }
];

export default routes;
