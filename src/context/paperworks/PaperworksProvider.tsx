import { FC, PropsWithChildren, useEffect, useMemo, useReducer } from 'react';
import { useActions } from './paperworks.actions';
import { useHomeActions } from './actions/home.actions';
import { useGeneralActions } from './actions/general.actions';
import { useStatesActions } from './actions/states.actions';
import { useSectorsActions } from './actions/sectors.actions';
import { useTransitionStatesActions } from './actions/transitionStates.actions';
import { useReasonsActions } from './actions/reasons.actions';
import { useParametersActions } from './actions/parameters.actions';
import { PaperworksContext, reducer, initialState } from './paperworks.context';
import { ContextType } from './paperworks.types';

type Props = PropsWithChildren;

export const PaperworksProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);
  const homeActions = useHomeActions(state, dispatch);
  const generalActions = useGeneralActions(state, dispatch);
  const statesActions = useStatesActions(state, dispatch);
  const sectorsActions = useSectorsActions(state, dispatch);
  const transitionStatesActions = useTransitionStatesActions(state, dispatch);
  const reasonsActions = useReasonsActions(state, dispatch);
  const parametersActions = useParametersActions(state, dispatch);

  useEffect(() => {
    actions.getCatalogs();
  }, []);

  const contextValue = useMemo<ContextType>(
    () => ({
      ...state,
      actions,
      homeActions,
      generalActions,
      statesActions,
      sectorsActions,
      transitionStatesActions,
      reasonsActions,
      parametersActions,
    }),
    [state, actions, homeActions, generalActions, statesActions, sectorsActions, transitionStatesActions, reasonsActions, parametersActions]
  );

  return <PaperworksContext.Provider value={contextValue}>{children}</PaperworksContext.Provider>;
};
