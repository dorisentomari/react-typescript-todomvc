import ls from 'local-storage';
import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';

import errorHandler from 'src/helpers/errorHandler';

import { LoginHttp } from 'src/http';

import { TypeThunkFunction } from 'src/interfaces/store';
import { TypeAnyObject } from 'src/interfaces/store';
import { AccountLoginParamsInterface } from 'src/interfaces/http';

const AccountAction = {
  userLogin(values: AccountLoginParamsInterface): TypeThunkFunction {
    return (dispatch: Dispatch) => {
      LoginHttp(values).then((result: TypeAnyObject) => {
        const { token, expiresIn } = result.data;
        ls('token', token);
        ls('expiresIn', expiresIn);
        return dispatch(push('/'));
      }).catch((error: AxiosError) => {
        errorHandler.httpError(error);
      });
    };
  }
};

export default AccountAction;
