import { Dispatch } from 'redux';
import { message } from 'antd';
import * as TYPES from '../action.types';

import { TypeThunkFunction } from 'src/interfaces/store';
import { TodosFormCreateInterface } from 'src/interfaces/http';
import { TodosCreateHttp } from 'src/http';

const HomeAction = {
  createTodo(todo: TodosFormCreateInterface): TypeThunkFunction {
    return async (dispatch: Dispatch) => {
      const result: any = await TodosCreateHttp(todo);
      if (result) {
        dispatch({
          type: TYPES.SET_CREATE_TODO,
          payload: result
        });
        message.success('create todo success!');
      } else {
        message.error(result.error);
      }
      return Promise.resolve();
    };
  }
};

export default HomeAction;
