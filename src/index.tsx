import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import routes from './routes';
import storeFn from './store';
import NotFound from './pages/notFound';

import 'src/assets/style/global.scss';

const { store, persistor } = storeFn();

ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
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
    </PersistGate>
  </Provider>
), document.getElementById('root'));
