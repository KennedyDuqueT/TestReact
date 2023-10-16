import { useContext } from 'react';
import { CycleManagementContext } from './cyclesManagement.context';

export const useCycleManagement = () => useContext(CycleManagementContext);
