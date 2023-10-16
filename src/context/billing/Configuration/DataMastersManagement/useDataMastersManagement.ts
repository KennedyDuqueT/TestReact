import { useContext } from 'react';
import { DataMastersManagementContext } from './dataMastersManagement.context';

export const useDataMastersManagement = () => useContext(DataMastersManagementContext);
