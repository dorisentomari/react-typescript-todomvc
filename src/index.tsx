import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './store';
import NotFound from './pages/notFound';

import 'src/assets/style/global.scss';

ReactDOM.render((
  <Provider store={store}>
    <Router>
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
    </Router>
  </Provider>
), document.getElementById('root'));
