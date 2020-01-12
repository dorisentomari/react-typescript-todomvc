import { HomeStateInterface } from 'src/interfaces/store/reducers.interface';
import { ActionInterface } from 'src/interfaces/store/actions.interface';

const initialState = {};

export default (state: HomeStateInterface = initialState, action: ActionInterface) => {
  switch (action.type) {
  default:
    return {
      ...state
    };
  }
};

