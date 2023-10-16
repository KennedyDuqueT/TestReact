import { useContext } from 'react';
import { RateManagementContext } from './ratesManagement.context';

export const useRateManagement = () => useContext(RateManagementContext);
