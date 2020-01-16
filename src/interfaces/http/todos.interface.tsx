export enum TodoStatusInterface {
  PENDING = 'PENDING',
  FINISHED = 'FINISHED'
}

export interface TodosFormInterface {
  id?: string;
  content: string;
  remark?: string;
  createTime?: string;
  updateTime?: string;
  status?: TodoStatusInterface;
}

export interface TodosUpdatePathInterface {
  id: string;
}
