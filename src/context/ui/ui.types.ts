export interface State {
  sideBarIsOpen: boolean;
}

export interface Actions {
  toggleSideBar: () => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
