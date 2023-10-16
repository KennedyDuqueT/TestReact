import { useContext } from 'react';
import { TariffSchedulesManagementContext } from './tariffSchedulesManagement.context';

export const useTariffSchedulesManagement = () => useContext(TariffSchedulesManagementContext);
