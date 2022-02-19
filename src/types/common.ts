import { Route } from 'constants/route';

// utils
export type ValueOf<T> = T[keyof T];

export interface PathProps {
  pathname: Route;
}

export type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
