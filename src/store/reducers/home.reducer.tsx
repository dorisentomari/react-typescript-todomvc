import * as TYPES from '../actionTypes';
import { HomeStateInterface, ActionInterface } from 'src/interfaces/store';

const initialState = {
  createTodo: {
    content: '',
    remark: ''
  },
  updateTodo: {
    content: '',
    remark: '',
    id: ''
  }
};

export default (state: HomeStateInterface = initialState, action: ActionInterface) => {
  switch (action.type) {
  case TYPES.SET_CREATE_TODO:
    return {
      ...state,
      createTodo: action.payload
    };
  case TYPES.SET_UPDATE_TODO:
    return {
      ...state,
      updateTodo: action.payload
    };
  default:
    return {
      ...state
    };
  }
};

