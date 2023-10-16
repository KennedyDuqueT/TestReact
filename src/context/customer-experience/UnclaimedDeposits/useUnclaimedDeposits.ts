import { useContext } from 'react';
import { UnclaimedDepositsContext } from './unclaimedDeposits.context';

export const useUnclaimedDeposits = () => useContext(UnclaimedDepositsContext);
