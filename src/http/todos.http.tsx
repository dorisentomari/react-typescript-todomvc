import { axios } from './';
import {
  TodosFormCreateInterface,
  TodosFormUpdateDeleteInterface,
  TodosFormUpdateDeletePathInterface,
  TodoListQueryInterface
} from 'src/interfaces/http';


export const TodosCreateHttp = async (bodyParams: TodosFormCreateInterface) => {
  const result = await axios.post('/api/v1/todos/create', bodyParams);
  return Promise.resolve(result);
};

export const TodosUpdateHttp = async (pathParams: TodosFormUpdateDeletePathInterface, bodyParams: TodosFormUpdateDeleteInterface) => {
  const { id } = pathParams;
  const result = await axios.post(`/api/v1/todos/${id}/update`, bodyParams);
  return Promise.resolve(result);
};

export const TodosDeleteHttp = async (pathParams: TodosFormUpdateDeletePathInterface) => {
  const { id } = pathParams;
  const result = await axios.post(`/api/v1/todos/${id}/delete`);
  return Promise.resolve(result);
};


export const TodosListGetHttp = async (bodyParams?: TodoListQueryInterface) => {
  return await axios.get('/api/v1/todos/list', {
    params: bodyParams
  });
};
