import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store from './store';
import history from './store/history';
import 'src/assets/style/global.scss';
import AuthRoute from './helpers/AuthRoute';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <AuthRoute component={Home} path={'/'} exact={true} />
        <Route path='/login' component={Login} exact={true} />
        <Route path='/register' component={Register} exact={true} />
        <Route component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
