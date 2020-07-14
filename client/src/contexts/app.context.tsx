import React, {
  createContext,
  Dispatch,
  useReducer,
  ReactElement,
} from 'react';

import { initialState, reducer } from '../reducers/reducer';
import { Action } from '../types/types';

export const AppStateContext = createContext(initialState);
export const AppDispatchContext = createContext<Dispatch<Action>>(() => null);

export const AppStateProvider = (props: {
  children: ReactElement;
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {props.children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
