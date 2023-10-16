import { useContext } from 'react';
import { ParameterManagementContext } from './parametersManagement.context';

export const useParameterManagement = () => useContext(ParameterManagementContext);
