import { createStore, applyMiddleware, Store, AnyAction, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { routerMiddleware } from 'connected-react-router';

import reducers, { TypeRootStateInterface } from './reducers';
import history from './history';

const store: Store<TypeRootStateInterface, AnyAction> = createStore(
  reducers,
  composeWithDevTools(
    compose(
      applyMiddleware(
        routerMiddleware(history),
        logger,
        thunk,
        promise
      )
    )
  )
);

export default store;
