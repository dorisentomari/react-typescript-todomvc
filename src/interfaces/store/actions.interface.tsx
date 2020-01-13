import { Dispatch, Store } from 'redux';

export interface ActionInterface {
  type: string;
  payload: any;
}

export interface TypeAnyObject {
  [propName: string]: any;
}

export interface TypeThunkFunction {
  (dispatch: Dispatch, getState: Store['getState']): void;
}
