import { Dispatch } from 'redux';
import { message } from 'antd';
import * as TYPES from '../actionTypes';

import { TypeThunkFunction } from 'src/interfaces/store';
import { TodosFormInterface } from '../../interfaces/http';
import { TodosCreateHttp } from '../../http';

const HomeAction = {
  createTodo(todo: TodosFormInterface): TypeThunkFunction {
    return async (dispatch: Dispatch) => {
      const result: any = await TodosCreateHttp(todo);
      console.log('result');
      console.log(result);
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
