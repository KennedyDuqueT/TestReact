import { useContext } from 'react';
import { SupplyLotContext } from './supplyLot.context';

export const useSupplyLot = () => useContext(SupplyLotContext);
