import { useContext } from 'react';
import { PosVerifoneConfigContext } from './posVerifoneConfig.context';

export const usePosVerifoneConfig = () => useContext(PosVerifoneConfigContext);
