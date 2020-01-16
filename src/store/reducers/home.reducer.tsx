import * as TYPES from '../actionTypes';
import { HomeStateInterface, ActionInterface } from 'src/interfaces/store';
import { TodoStatusInterface } from 'src/interfaces/http';

const initialState = {
  currentTodo: {
    id: '',
    content: '',
    remark:'',
    createTime: '',
    status: TodoStatusInterface.PENDING,
  }
};

export default (state: HomeStateInterface = initialState, action: ActionInterface) => {
  switch (action.type) {
  case TYPES.SET_CREATE_TODO:
    return {
      ...state,
      currentTodo: action.payload
    };
  case TYPES.SET_UPDATE_TODO:
    return {
      ...state,
      currentTodo: action.payload
    };
  default:
    return {
      ...state
    };
  }
};

