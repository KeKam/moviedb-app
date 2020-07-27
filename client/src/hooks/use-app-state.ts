import { useContext } from 'react';

import { AppStateContext, AppDispatchContext } from '../contexts/app.context';

export const useAppState = () => {
  const state = useContext(AppStateContext);
  const dispatch = useContext(AppDispatchContext);

  return { state, dispatch };
};
