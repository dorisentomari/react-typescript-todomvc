import { LOGIN_TYPES, AccountStateInterface } from 'src/interfaces/store/reducers.interface';
import { ActionInterface } from 'src/interfaces/store/actions.interface';

import * as TYPES from '../actionTypes';

const initialState = {
  token: '',
  expiresIn: 0,
  loginState: LOGIN_TYPES.UN_VALIDATE
};

export default (state: AccountStateInterface = initialState, action: ActionInterface) => {
  switch (action.type) {
  case TYPES.SET_ACCOUNT_LOGIN_STATE:
    const  { token, expiresIn, loginState } = action.payload;
    return {
      ...state,
      token,
      expiresIn,
      loginState
    };
  default:
    return {
      ...state
    };
  }
};
