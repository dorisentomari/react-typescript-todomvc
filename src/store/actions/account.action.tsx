import ls from 'local-storage';

import { message } from 'antd';
import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';

import { TypeThunkFunction } from '../../interfaces/store/actions.interface';
import { TypeAnyObject } from '../../interfaces/store/actions.interface';
import { AccountLoginParamsInterface } from '../../interfaces/forms/account.interface';
import { LoginHttp } from '../../http/authorization.http';

const AccountAction = {
  userLogin(values: AccountLoginParamsInterface): TypeThunkFunction {
    return (dispatch: Dispatch) => {
      LoginHttp(values).then((result: TypeAnyObject) => {
        const { token, expiresIn } = result.data;
        ls('token', token);
        ls('expiresIn', expiresIn);
        return dispatch(push('/'));
      }).catch((error: AxiosError) => {
        if (error.response) {
          message.error(error.response.data);
        }
      });
    };
  }
};

export default AccountAction;
