import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse  } from 'axios';
import { message } from 'antd';
import ls from 'local-storage';
import constant from '../config/constant.config';
import history from '../store/history';

const axios = Axios.create({
  baseURL: 'http://localhost:8000'
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {
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

axios.interceptors.response.use((res: AxiosResponse) => {
  return res.data;
}, (error: AxiosError) => {
  if (error.response) {
    if (error.response.status === 401) {
      message.error('login expired, please login again');
      history.push('/login');
      localStorage.clear();
    }

    return Promise.reject(error);
  }

  message.error('system timeout');
  return Promise.reject();
});

export {
  axios
};
