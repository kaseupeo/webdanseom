/**
 * 작성자: 정진욱
 * 듀티코드 설정에 관한 리덕스 설정
 *
 */
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../libs/api/dutyCode';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';
import createRequestThunk, {
  createRequestActionTypes as createRequestActionTypesThunk,
} from '../libs/createRequestThunk';
//필드 값 초기화
const INITIALIZE_FORM = 'dutyCode/INITIALIZE_FORM';
const CHANGE_DUTYCODE = 'dutyCode/CHANGE_NURSE';
const [SELECT_DUTYCODE, SELECT_DUTYCODE_SUCCESS, SELECT_DUTYCODE_FAILURE] =
  createRequestActionTypes('dutyCode/SELECT_DUTYCODE');
const [INSERT_DUTYCODE, INSERT_DUTYCODE_SUCCESS, INSERT_DUTYCODE_FAILURE] =
  createRequestActionTypes('dutyCode/INSERT_DUTYCODE');
const [DELETE_DUTYCODE, DELETE_DUTYCODE_SUCCESS, DELETE_DUTYCODE_FAILURE] =
  createRequestActionTypes('dutyCode/DELETE_DUTYCODE');
const [EDIT_DUTYCODE, EDIT_DUTYCODE_SUCCESS, EDIT_DUTYCODE_FAILURE] =
  createRequestActionTypes('dutyCode/EDIT_DUTYCODE');
const [INIT_DUTYCODE, INIT_DUTYCODE_SUCCESS, INIT_DUTYCODE_FAILURE] =
  createRequestActionTypes('dutyCode/INIT_DUTYCODE');

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const changeDutyCode = createAction(
  CHANGE_DUTYCODE,
  ({ index, key, value }) => ({
    index,
    key,
    value,
  }),
);
export const selectDutyCode = createAction(
  SELECT_DUTYCODE,
  (dutyCodeList) => dutyCodeList,
);
export const insertDutyCode = createAction(
  INSERT_DUTYCODE,
  (response) => response,
);
export const deletetDutyCode = createAction(
  DELETE_DUTYCODE,
  (response) => response,
);
export const editDutyCode = createAction(EDIT_DUTYCODE, (response) => response);
export const initDutyCode = createAction(INIT_DUTYCODE, (response) => response);
//청크
export const selectDutyCodeAsync = createRequestThunk(
  SELECT_DUTYCODE,
  authAPI.selectDutyCode,
);
export const insertDutyCodeAsync = createRequestThunk(
  INSERT_DUTYCODE,
  authAPI.insertDutyCode,
);
export const deleteDutyCodeAsync = createRequestThunk(
  DELETE_DUTYCODE,
  authAPI.deleteDutyCode,
);
export const editDutyCodeAsync = createRequestThunk(
  EDIT_DUTYCODE,
  authAPI.editDutyCode,
);
export const initDutyCodeAsync = createRequestThunk(
  INIT_DUTYCODE,
  authAPI.initDutyCode,
);
//사가
const selectDutyCodeSaga = createRequestSaga(
  SELECT_DUTYCODE,
  authAPI.selectDutyCode,
);
const insertDutyCodeSaga = createRequestSaga(
  INSERT_DUTYCODE,
  authAPI.insertDutyCode,
);
const deleteDutyCodeSaga = createRequestSaga(
  DELETE_DUTYCODE,
  authAPI.deleteDutyCode,
);
const editDutyCodeSaga = createRequestSaga(EDIT_DUTYCODE, authAPI.editDutyCode);
const initDutyCodeSaga = createRequestSaga(INIT_DUTYCODE, authAPI.initDutyCode);
export function* dutyCodeSaga() {
  yield takeLatest(SELECT_DUTYCODE, selectDutyCodeSaga);
  yield takeLatest(INSERT_DUTYCODE, insertDutyCodeSaga);
  yield takeLatest(DELETE_DUTYCODE, deleteDutyCodeSaga);
  yield takeLatest(EDIT_DUTYCODE, editDutyCodeSaga);
  yield takeLatest(INIT_DUTYCODE, initDutyCodeSaga);
}

const initialState = {
  dutyCodeList: [''],
  response: {
    response: null,
    message: '',
    data: null,
  },

  responseError: null,
};

const dutyCode = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [CHANGE_DUTYCODE]: (state, { payload: { index, key, value } }) =>
      produce(state, (draft) => {
        draft['dutyCodeList'][index][key] = value;
      }),
    [SELECT_DUTYCODE_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      dutyCodeList: response.data,
      response: response,
      responseError: null,
    }),
    [SELECT_DUTYCODE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [INSERT_DUTYCODE_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response: response,
    }),
    [INSERT_DUTYCODE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [DELETE_DUTYCODE_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response: response,
    }),
    [DELETE_DUTYCODE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [EDIT_DUTYCODE_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response: response,
    }),
    [EDIT_DUTYCODE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [INIT_DUTYCODE_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response: response,
    }),
    [INIT_DUTYCODE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
  },
  initialState,
);
export default dutyCode;
