export interface State {
  isLoading: boolean;
}

export interface Actions {
  showLoader: (isLoading: boolean) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
