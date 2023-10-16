import { useContext } from 'react';
import { SupplyStatusConfigContext } from './supplyStatusConfig.context';

export const useSupplyStatusConfig = () => useContext(SupplyStatusConfigContext);
