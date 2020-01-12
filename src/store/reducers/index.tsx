import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from './home';
import account from './account';

import history from '../history';

const reducers = combineReducers({
  home,
  account,
  router: connectRouter(history)
});

export default reducers;

export type TypeRootState = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
}

// export type TypeRootState = {
//   [key in keyof typeof reducers]: ReturnType<typeof reducers[key>
// }
