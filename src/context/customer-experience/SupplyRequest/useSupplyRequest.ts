import { useContext } from 'react';
import { SupplyRequestContext } from './supplyRequest.context';

export const useSupplyRequest = () => useContext(SupplyRequestContext);
