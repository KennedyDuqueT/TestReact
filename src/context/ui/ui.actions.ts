import Cookies from 'js-cookie';
import { Actions, State } from './ui.types';
import { reducerActions } from './ui.constants';

const useActions = (state: State, dispatch: any): Actions => {
  const toggleSideBar = (): void => {
    const isOpen = !state.sideBarIsOpen;

    dispatch(reducerActions.toggleSideBar(isOpen));
    Cookies.set('sideBarIsOpen', isOpen.toString());
  };

  return {
    toggleSideBar,
  };
};

export { useActions };
