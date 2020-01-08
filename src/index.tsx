import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './store';
import NotFound from './pages/notFound';

import 'src/assets/style/global.scss';

ReactDOM.render((
  <Provider store={store}>
    <Router>
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
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
