import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { useActions } from './currencyExchangeRateConfig.actions';
import { CurrencyExchangeRateConfigContext, reducer, initialState } from './currencyExchangeRateConfig.context';
import { ContextType } from './currencyExchangeRateConfig.types';

type Props = PropsWithChildren;

export const CurrencyExchangeRateConfigProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo<ContextType>(() => ({ ...state, actions }), [state, actions]);

  return <CurrencyExchangeRateConfigContext.Provider value={contextValue}>{children}</CurrencyExchangeRateConfigContext.Provider>;
};
