import { useContext } from 'react';
import { PosProviderConfigContext } from './posProviderConfig.context';

export const usePosProviderConfig = () => useContext(PosProviderConfigContext);
