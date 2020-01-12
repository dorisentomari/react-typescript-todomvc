import { TypeAccount, TypeAction, LOGIN_TYPES } from 'src/types/store';
import * as TYPES from '../actionTypes';

const initialState = {
  user: {},
  token: '',
  expiresIn: 0,
  loginState: LOGIN_TYPES.UN_VALIDATE
};

export default (state: TypeAccount = initialState, action: TypeAction) => {
  switch (action.type) {
  case TYPES.SET_ACCOUNT_LOGIN_STATE:
    const  { user, token, expiresIn, loginState } = action.payload;

    return {
      ...state,
      user,
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
