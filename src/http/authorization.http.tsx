import { axios } from './';
import { AccountLoginParamsInterface,
  AccountRegisterParamsInterface,
  JwtTokenInterface } from 'src/interfaces/http';

export const LoginHttp = async (bodyParams: AccountLoginParamsInterface) => {
  const result: JwtTokenInterface = await axios.post('/api/v1/account/login', bodyParams);
  return Promise.resolve(result);
};

export const RegisterHttp = async (bodyParams: AccountRegisterParamsInterface) => {
  const result = await axios.post('/api/v1/account/register', bodyParams);
  return Promise.resolve(result);
};

export const LogoutHttp = async () => {
  const result = await axios.post('/api/v1/account/logout');
  return Promise.resolve(result);
};
