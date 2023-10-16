import { createAction } from '@/utils';

export enum Types {
  SET_SIDE_BAR_IS_OPEN = 'ui/setSideBarIsOpen',
}

export const reducerActions = {
  toggleSideBar: createAction<Types, boolean>(Types.SET_SIDE_BAR_IS_OPEN),
};
