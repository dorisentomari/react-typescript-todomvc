import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse  } from 'axios';
import ls from 'local-storage';
import constant from '../config/constant';

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:8000',
  // withCredentials: true,
  headers: {
    cookies: {
      Authorization: ''
    }
  }
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const url = config.url;
  if (url) {
    const { WHITE_LIST } = constant;
    if (WHITE_LIST.includes(url)) {
      return config;
    }

    config.headers.cookies.headers = ls('Authorization');
    return config;
  }
  return Promise.reject('URL error');

}, (error: AxiosError) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((res: AxiosResponse) => {
  return res.data;
}, (error: AxiosError) => {
  return Promise.reject(error);
});

export default axiosInstance;
