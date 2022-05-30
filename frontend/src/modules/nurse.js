/**
 * 작성자: 정진욱
 * 간호사 설정에 관한 리덕스 설정
 *
 */
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../libs/api/nurse';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';
import createRequestThunk, {
  createRequestActionTypes as createRequestActionTypesThunk,
} from '../libs/createRequestThunk';
//필드 값 초기화
const INITIALIZE_FORM = 'nurse/INITIALIZE_FORM';
const CHANGE_NURSE = 'nurse/CHANGE_NURSE';

const [SELECT_NURSES, SELECT_NURSES_SUCCESS, SELECT_NURSES_FAILURE] =
  createRequestActionTypes('nurse/SELECT_NURSES');
const [INSERT_NURSES, INSERT_NURSES_SUCCESS, INSERT_NURSES_FAILURE] =
  createRequestActionTypes('nurse/INSERT_NURSES');
const [DELETE_NURSES, DELETE_NURSES_SUCCESS, DELETE_NURSES_FAILURE] =
  createRequestActionTypes('nurse/DELETE_NURSES');
const [EDIT_NURSES, EDIT_NURSES_SUCCESS, EDIT_NURSES_FAILURE] =
  createRequestActionTypes('nurse/EDIT_NURSES');

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const changeNurse = createAction(
  CHANGE_NURSE,
  ({ index, key, value }) => ({
    index,
    key,
    value,
  }),
);

export const selectNurses = createAction(
  SELECT_NURSES,
  (nurseList) => nurseList,
);

export const insertNurses = createAction(INSERT_NURSES, (response) => response);

export const deletetNurses = createAction(
  DELETE_NURSES,
  (response) => response,
);
export const editNurses = createAction(EDIT_NURSES, (response) => response);

export const selectNursesAsync = createRequestThunk(
  SELECT_NURSES,
  authAPI.selectNurse,
);
export const insertNursesAsync = createRequestThunk(
  INSERT_NURSES,
  authAPI.insertNurse,
);
export const deleteNursesAsync = createRequestThunk(
  DELETE_NURSES,
  authAPI.deleteNurses,
);
export const editinsertNursesAsync = createRequestThunk(
  EDIT_NURSES,
  authAPI.editNurses,
);

const selectNursesSaga = createRequestSaga(SELECT_NURSES, authAPI.selectNurse);
const insertNursesSaga = createRequestSaga(INSERT_NURSES, authAPI.insertNurse);
const deleteNursesSaga = createRequestSaga(DELETE_NURSES, authAPI.deleteNurses);
const editNursesSaga = createRequestSaga(EDIT_NURSES, authAPI.editNurses);

export function* nurseSaga() {
  yield takeLatest(SELECT_NURSES, selectNursesSaga);
  yield takeLatest(INSERT_NURSES, insertNursesSaga);
  yield takeLatest(DELETE_NURSES, deleteNursesSaga);
  yield takeLatest(EDIT_NURSES, editNursesSaga);
}

const initialState = {
  nurseList: [''],
  response: {
    response: null,
    message: '',
    data: null,
  },

  responseError: null,
};

const nurse = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [CHANGE_NURSE]: (state, { payload: { index, key, value } }) =>
      produce(state, (draft) => {
        draft['nurseList'][index][key] = value;
      }),
    [SELECT_NURSES_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      nurseList: response.data,
      response: response,
      responseError: null,
    }),
    [SELECT_NURSES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [INSERT_NURSES_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response,
    }),
    [INSERT_NURSES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [EDIT_NURSES_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response,
    }),
    [EDIT_NURSES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [DELETE_NURSES_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response,
    }),
    [DELETE_NURSES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
  },
  initialState,
);
export default nurse;
