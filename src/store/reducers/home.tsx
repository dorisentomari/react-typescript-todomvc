import { TypeHome, TypeAction } from 'src/types/store';

const initialState = {};

export default (state: TypeHome = initialState, action: TypeAction) => {
  switch (action.type) {
  default:
    return {
      ...state
    };
  }
};

