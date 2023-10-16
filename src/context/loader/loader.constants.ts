import { createAction } from '@/utils';

export enum Types {
  SET_LOADING = 'loader/setLoading',
}

export const reducerActions = {
  setLoading: createAction<Types, boolean>(Types.SET_LOADING),
};
