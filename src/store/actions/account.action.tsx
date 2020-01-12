import * as TYPES from '../actionTypes';

import { ActionInterface } from '../../interfaces/store/actions.interface';
import { AccountLoginParamsInterface } from '../../interfaces/store/reducers.interface';

const AccountAction = {
  userLogin (params: AccountLoginParamsInterface): ActionInterface {
    const { token, expiresIn, loginState } = params;
    return {
      type: TYPES.SET_ACCOUNT_LOGIN_STATE,
      payload: {
        token, expiresIn, loginState
      }
    };
  }
};

export default AccountAction;
