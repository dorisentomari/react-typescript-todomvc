import { axios } from './';
import {
  TodosCreateUpdateInterface,
  TodosUpdatePathParamsInterface
} from 'src/interfaces/http';


export const TodosCreateHttp = async (bodyParams: TodosCreateUpdateInterface) => {
  const result = await axios.post('/api/v1/todos/create', bodyParams);
  return Promise.resolve(result);
};

export const TodosUpdateHttp = async (pathParams: TodosUpdatePathParamsInterface, bodyParams: TodosCreateUpdateInterface) => {
  const { id } = pathParams;
  const result = await axios.post(`/api/v1/todos/${id}/update`, bodyParams);
  return Promise.resolve(result);
};

export const TodosListGetHttp = async () => {
  return await axios.get('/api/v1/todos/list');
};
