import * as ls from 'local-storage';

function checkLogin(): boolean {
  const token: string = ls.get('token');
  const expiresIn: number = ls.get('expiresIn');
  if (!token) {
    ls.remove('token');
    ls.remove('expiresIn');
    return false;
  }
  if (expiresIn < +new Date()) {
    ls.remove('token');
    ls.remove('expiresIn');
    return false;
  }
  return true;
}

export default checkLogin;
