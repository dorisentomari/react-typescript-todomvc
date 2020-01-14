import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse  } from 'axios';
import { message } from 'antd';
import ls from 'local-storage';
import constant from '../config/constant';
import history from '../store/history';

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:8000'
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const url = config.url;
  if (url) {
    const { WHITE_LIST } = constant;
    if (WHITE_LIST.includes(url)) {
      return config;
    }

    config.headers.authorization = ls('token');
    return config;
  }
  return Promise.reject('URL error');

}, (error: AxiosError) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((res: AxiosResponse) => {
  return res.data;
}, (error: AxiosError) => {
  if (error.response) {
    if (error.response.status === 401) {
      message.error('登录过期，请重新登录');
      history.push('/login');
      localStorage.clear();
    }

    return Promise.reject(error);
  }

  message.error('系统超时');
  return Promise.reject();
});

export default axiosInstance;

export * from './authorization.http';
export * from './todos.http';
