import { createAction, handleActions } from 'redux-actions';

const SAMPLE_ACTION = 'acuth/SAMPLE_ACTION';

export const sample_action = createAction(SAMPLE_ACTION);

const initialState = {};

const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default auth;
