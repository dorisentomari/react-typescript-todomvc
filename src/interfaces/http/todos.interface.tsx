export interface TodoListQueryInterface {
  page?: number;
  pageSize?: number;
}

export enum TodoStatusInterface {
  PENDING = 'PENDING',
  FINISHED = 'FINISHED'
}

export interface TodosFormCreateInterface {
  content: string;
  remark?: string;
}

export interface TodosFormUpdateDeletePathInterface {
  _id: string;
}

export interface TodosFormUpdateDeleteInterface {
  _id: string;
  content: string;
  remark?: string;
  createTime: string;
  updateTime: string;
  status: TodoStatusInterface;
}
