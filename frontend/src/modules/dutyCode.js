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
//필드 값 초기화
const INITIALIZE_FORM = 'nurse/INITIALIZE_FORM';

const [SELECT_DUTYCODE, SELECT_DUTYCODE_SUCCESS, SELECT_DUTYCODE_FAILURE] =
  createRequestActionTypes('nurse/SELECT_NURSES');
const [INSERT_DUTYCODE, INSERT_DUTYCODE_SUCCESS, INSERT_DUTYCODE_FAILURE] =
  createRequestActionTypes('nurse/INSERT_NURSES');
const [DELETE_DUTYCODE, DELETE_DUTYCODE_SUCCESS, DELETE_DUTYCODE_FAILURE] =
  createRequestActionTypes('nurse/DELETE_NURSES');
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const selectDutyCode = createAction(
  SELECT_DUTYCODE,
  (dutyCode) => dutyCode,
);
export const insertDutyCode = createAction(
  INSERT_DUTYCODE,
  (dutyCode) => dutyCode,
);
export const deletetDutyCode = createAction(
  DELETE_DUTYCODE,
  (dutyCode) => dutyCode,
);

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

export function* dutyCodeSaga() {
  yield takeLatest(SELECT_DUTYCODE, selectDutyCodeSaga);
  yield takeLatest(INSERT_DUTYCODE, insertDutyCodeSaga);
  yield takeLatest(DELETE_DUTYCODE, deleteDutyCodeSaga);
}
const initialState = {
  nurse: {},
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

    [SELECT_DUTYCODE_SUCCESS]: (state, { payload: dutyCode }) => ({
      ...state,
      response: dutyCode,
      responseError: null,
    }),
    [SELECT_DUTYCODE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [INSERT_DUTYCODE_SUCCESS]: (state, { payload: dutyCode }) => ({
      ...state,
      dutyCode,
    }),
    [INSERT_DUTYCODE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [DELETE_DUTYCODE_SUCCESS]: (state, { payload: dutyCode }) => ({
      ...state,
      dutyCode,
    }),
    [DELETE_DUTYCODE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
  },
  initialState,
);
export default nurse;
