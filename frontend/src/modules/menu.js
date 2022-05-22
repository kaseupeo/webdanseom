import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';
import * as authAPI from '../libs/api/member';
import { takeLatest } from 'redux-saga/effects';

//필드 값 초기화
const INITIALIZE_FORM = 'menu/INITIALIZE_FORM';
const [TOKEN] = createRequestActionTypes('menu/TOKEN');
const [HIDING_MENU] = createRequestActionTypes('menu/HIDING_MENU');
const [GROUP_STATE] = createRequestActionTypes('menu/GROUP_STATE');
const [
  GROUP_STATE_LOADING,
  GROUP_STATE_LOADING_SUCCESS,
  GROUP_STATE_LOADING_FAILURE,
] = createRequestActionTypes('menu/GROUP_STATE_LOADING');

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const hidingMenu = createAction(HIDING_MENU, (hiding) => hiding);
export const token = createAction(TOKEN, (token) => token);
export const groupState = createAction(
  GROUP_STATE,
  ({ groupName, joinGroup, headNurseCheck }) => ({
    groupName: groupName,
    joinGroup: joinGroup,
    headNurseCheck: headNurseCheck,
  }),
);
export const groupStateLoad = createAction(GROUP_STATE_LOADING);

const groupSateSaga = createRequestSaga(
  GROUP_STATE_LOADING,
  authAPI.groupState,
);

export function* menuSaga() {
  yield takeLatest(GROUP_STATE_LOADING, groupSateSaga);
}
const initialState = {
  hidingMenu: true,
  groupState: {
    groupName: null,
    joinGroup: false,
    headNurseCheck: false,
  },
  response: {
    response: null,
    message: null,
    data: null,
  },
  responseError: null,
};

const menu = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [TOKEN]: (state, { payload: token }) => ({
      ...state,
      token,
    }),
    [HIDING_MENU]: (state, { payload: hiding }) => ({
      ...state,
      hidingMenu: hiding,
    }),
    [GROUP_STATE]: (state, { payload: groupState }) => ({
      ...state,
      groupState,
    }),
    [GROUP_STATE_LOADING_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response,
      responseError: null,
    }),
    [GROUP_STATE_LOADING_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
  },
  initialState,
);

export default menu;
