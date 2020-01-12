export interface TodosCreateUpdateInterface {
  content: string;
  remark?: string;
}

export interface TodosUpdatePathParamsInterface {
  id: string;
}

export interface TodosInterface {
  id: string;
  content: string;
  remark?: string;
  createTime: string;
  updateTime: string;
  status: string;
}

