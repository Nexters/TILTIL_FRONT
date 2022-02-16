import { Route } from 'constants/route';

// utils
export type ValueOf<T> = T[keyof T];

export interface PathProps {
  pathname: Route;
}

export interface Authorization {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires: number;
}
