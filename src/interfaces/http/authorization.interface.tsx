export interface AccountLoginParamsInterface {
  email: string;
  password: string;
}

export interface AccountRegisterParamsInterface {
  email: string;
  password: string;
  rePassword: string;
}

export interface JwtTokenInterface {
  data: {
    token: string;
    expiresIn: number;
  };
}
