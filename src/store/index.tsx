import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const persistConfig = {
  key: 'redux',
  storage,
  debug: true
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
  const persistor = persistStore(store);
  return { store, persistor };
};
