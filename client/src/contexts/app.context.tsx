import React, { createContext, Dispatch, useReducer, ReactNode } from 'react';

import { initialState, reducer } from '../store/reducer';
import { Actions } from '../store/types';

export const AppStateContext = createContext(initialState);
export const AppDispatchContext = createContext<Dispatch<Actions>>(() => null);

export const AppStateProvider = (props: {
  children: ReactNode;
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
