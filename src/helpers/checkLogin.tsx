import * as ls from 'local-storage';
import { formatTime } from './utils';

function checkLogin(): boolean {
  const token: string = ls.get('token');
  const expiresIn: number = ls.get('expiresIn');
  console.log(formatTime(new Date(expiresIn), true));
  if (!token) {
    return false;
  }
  if (expiresIn < +new Date()) {
    return false;
  }
  return true;
}

export default checkLogin;
