import { useContext } from 'react';
import { PaperworksContext } from './paperworks.context';

export const usePaperworks = () => useContext(PaperworksContext);
