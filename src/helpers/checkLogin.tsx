function checkLogin(): boolean {
  return !!window.localStorage.getItem('token');
}

export default checkLogin;
