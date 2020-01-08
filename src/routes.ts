import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
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
    name: 'login',
    to: '/login',
    exact: true,
    component: Login
  },
  {
    name: 'register',
    to: '/register',
    exact: true,
    component: Register
  }
];

export default routes;
