import { CycleInterface, RouteInterface } from '@/models/billing';

export interface State {
  cycles: CycleInterface[];
}

export interface Actions {
  saveRoute: (newRouteToSave: RouteInterface) => Promise<boolean>;
  searchRoute: (routeToSearch: RouteInterface) => Promise<RouteInterface[]>;
  loadInitialInfo: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
