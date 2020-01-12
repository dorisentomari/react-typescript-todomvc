import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from './home.reducer';
import account from './account.reducer';

import history from '../history';

const reducers = combineReducers({
  router: connectRouter(history),
  home,
  account
});

export default reducers;

export type TypeRootStateInterface = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
}
