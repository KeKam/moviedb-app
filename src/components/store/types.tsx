interface StartSearchMoviesAction {
  type: ActionTypes.START_SEARCH_MOVIES;
}

interface SearchMoviesSuccessAction {
  type: ActionTypes.SEARCH_MOVIES_SUCCESS;
  payload: [];
}

interface SearchMoviesFailureAction {
  type: ActionTypes.SEARCH_MOVIES_FAILURE;
  payload: string;
}

export enum ActionTypes {
  START_SEARCH_MOVIES = 'START_SEARCH_MOVIES',
  SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE'
}

export type Actions =
  | StartSearchMoviesAction
  | SearchMoviesSuccessAction
  | SearchMoviesFailureAction;
