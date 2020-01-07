import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import routes from './routes';
import store from './store';
import history from './store/history';


ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className='App'>
        <ul>
          {
            routes.map(route => (
              <li key={route.to}>
                <NavLink to={route.to}>{route.name}</NavLink>
              </li>
            ))
          }
        </ul>
        <Switch>
          {
            routes.map(route => (
              <Route key={route.name}
                exact={route.exact}
                path={route.to}
                component={route.component} />
            ))
          }
          <Redirect to={'/'}/>
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
