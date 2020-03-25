export enum ActionTypes {
  START_SEARCH_MOVIES = 'START_SEARCH_MOVIES',
  SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE'
}

export type Actions =
  | {
      type: ActionTypes.START_SEARCH_MOVIES;
    }
  | {
      type: ActionTypes.SEARCH_MOVIES_SUCCESS;
      payload: [];
    }
  | {
      type: ActionTypes.SEARCH_MOVIES_FAILURE;
      payload: string;
    };
