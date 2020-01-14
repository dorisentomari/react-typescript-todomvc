import * as ls from 'local-storage';
import { message } from 'antd';

function checkLogin(): boolean {
  const token: string = ls.get('token');
  const expiresIn: number = ls.get('expiresIn');
  if (!token) {
    message.warning('login info has expired, please login again');
    ls.remove('token');
    ls.remove('expiresIn');
    return false;
  }
  if (expiresIn < +new Date()) {
    message.warning('login info has expired, please login again');
    ls.remove('token');
    ls.remove('expiresIn');
    return false;
  }
  return true;
}

export default checkLogin;
