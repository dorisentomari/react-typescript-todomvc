import axiosInstance from './index';
import { LoginParamsInterface,RegisterParamsInterface, JwtTokenInterface } from '../interfaces/http/authorization.interface';

export const LoginHttp = async (bodyParams: LoginParamsInterface) => {
  const result: JwtTokenInterface = await axiosInstance.post('/api/v1/account/login', bodyParams);
  return Promise.resolve(result);
};

export const RegisterHttp = async (bodyParams: RegisterParamsInterface) => {
  const result = await axiosInstance.post('/api/v1/account/register', bodyParams);
  return Promise.resolve(result);
};

export const LogoutHttp = async () => {
  const result = await axiosInstance.post('/api/v1/account/logout');
  return Promise.resolve(result);
};
