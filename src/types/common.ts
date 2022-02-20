import { Route } from 'constants/route';

// utils
export type ValueOf<T> = T[keyof T];
export type Nullable<T> = T | null;
export type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export interface PathProps {
  pathname: Route;
}
