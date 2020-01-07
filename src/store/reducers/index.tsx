import home from './home';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../history';

const reducers = combineReducers({
  home,
  router: connectRouter(history)
});

export default reducers;

// export type TypeRootState = {
//   [key in keyof typeof reducers]: ReturnType<typeof reducers[key>
// }
