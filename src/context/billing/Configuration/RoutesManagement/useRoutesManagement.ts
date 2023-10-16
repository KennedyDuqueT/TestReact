import { useContext } from 'react';
import { RouteManagementContext } from './routesManagement.context';

export const useRouteManagement = () => useContext(RouteManagementContext);
