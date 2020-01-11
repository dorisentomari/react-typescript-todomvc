export interface LoginParamsInterface {
  email: string;
  password: string;
}

export interface RegisterParamsInterface {
  email: string;
  password: string;
  rePassword: string;
}

export interface JwtTokenInterface {
  token: string;
  expiresIn: number;
}
