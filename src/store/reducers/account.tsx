import { TypeAccount, TypeAction, LOGIN_TYPES } from 'src/types/store';

const initialState = {
  user: {},
  loginState: LOGIN_TYPES.UN_VALIDATE
};

export default (state: TypeAccount = initialState, action: TypeAction) => {
  switch (action.type) {
  default:
    return {
      ...state
    };
  }
};
