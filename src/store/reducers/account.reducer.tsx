import { AccountStateInterface, ActionInterface } from 'src/interfaces/store';

const initialState = {

};

export default (state: AccountStateInterface = initialState, action: ActionInterface) => {
  switch (action.type) {
  default:
    return {
      ...state
    };
  }
};
