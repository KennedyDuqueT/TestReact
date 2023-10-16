import { useContext } from 'react';
import { LotStatusConfigContext } from './lotStatusConfig.context';

export const useLotStatusConfig = () => useContext(LotStatusConfigContext);
