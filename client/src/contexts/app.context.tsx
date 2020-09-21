import React, {
  createContext,
  useContext,
  Dispatch,
  useReducer,
  ReactElement,
} from 'react';

import { initialState, reducer } from '../reducers/reducer';
import { Action } from '../types/types';

export const AppStateContext = createContext(initialState);
export const AppDispatchContext = createContext<Dispatch<Action>>(() => null);

export const AppStateProvider = (props: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {props.children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error('useAppState must be used within a AuthStateProvider');
  }

  return context;
};

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AuthStateProvider');
  }

  return context;
};
