export interface HomeStateInterface {
}

export enum LOGIN_TYPES {
  // 初始时，未确定用户登录状态
  UN_VALIDATE,
  // 用户已登录
  LOGIN,
  // 用户未登录
  UN_LOGIN
}

export interface AccountStateInterface {
  token: string;
  expiresIn: number;
  loginState: LOGIN_TYPES;
}

export interface AccountLoginParamsInterface {
  token: string;
  expiresIn: number;
  loginState: LOGIN_TYPES;
}

