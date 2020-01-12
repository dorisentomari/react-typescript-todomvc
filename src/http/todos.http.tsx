import axiosInstance from './index';
import {
  TodosCreateUpdateInterface,
  TodosInterface,
  TodosUpdatePathParamsInterface
} from '../interfaces/http/todos.interface';


export const TodosCreateHttp = async (bodyParams: TodosCreateUpdateInterface) => {
  const result = await axiosInstance.post('/api/v1/todos/create', bodyParams);
  return Promise.resolve(result);
};

export const TodosUpdateHttp = async (pathParams: TodosUpdatePathParamsInterface, bodyParams: TodosCreateUpdateInterface) => {
  const { id } = pathParams;
  const result = await axiosInstance.post(`/api/v1/todos/${id}/update`, bodyParams);
  return Promise.resolve(result);
};

export const TodosListGetHttp = async () => {
  // const result = await axiosInstance.get('/api/v1/todos/list');
  // console.log('result');
  // console.log(result);
  return await axiosInstance.get('/api/v1/todos/list');
};
