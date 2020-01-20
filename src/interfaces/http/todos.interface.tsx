export interface TodoListQueryInterface {
  page?: number;
  pageSize?: number;
}

export enum TodoStatusInterface {
  PENDING = 'PENDING',
  FINISHED = 'FINISHED',
  DELETED = 'DELETED'
}

export interface TodosFormCreateInterface {
  content: string;
  remark?: string;
}

export interface TodosFormUpdateDeletePathInterface {
  id: string;
}

export interface TodosFormUpdateDeleteInterface {
  id: string;
  content: string;
  remark?: string;
  createTime: string;
  updateTime: string;
  status: TodoStatusInterface;
}
