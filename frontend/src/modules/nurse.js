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
//필드 값 초기화
const INITIALIZE_FORM = 'nurse/INITIALIZE_FORM';

const [SELECT_NURSES, SELECT_NURSES_SUCCESS, SELECT_NURSES_FAILURE] =
  createRequestActionTypes('nurse/SELECT_NURSES');
const [INSERT_NURSES, INSERT_NURSES_SUCCESS, INSERT_NURSES_FAILURE] =
  createRequestActionTypes('nurse/INSERT_NURSES');
const [DELETE_NURSES, DELETE_NURSES_SUCCESS, DELETE_NURSES_FAILURE] =
  createRequestActionTypes('nurse/DELETE_NURSES');
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const selectNurses = createAction(SELECT_NURSES, (nurses) => nurses);
export const insertNurses = createAction(INSERT_NURSES, (nurses) => nurses);
export const deletetNurses = createAction(DELETE_NURSES, (nurses) => nurses);

const selectNursesSaga = createRequestSaga(SELECT_NURSES, authAPI.selectNurse);
const insertNursesSaga = createRequestSaga(INSERT_NURSES, authAPI.insertNurse);
const deleteNursesSaga = createRequestSaga(DELETE_NURSES, authAPI.deleteNurse);

export function* nurseSaga() {
  yield takeLatest(SELECT_NURSES, selectNursesSaga);
  yield takeLatest(INSERT_NURSES, insertNursesSaga);
  yield takeLatest(DELETE_NURSES, deleteNursesSaga);
}
const initialState = {
  nurses: [],
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

    [SELECT_NURSES_SUCCESS]: (state, { payload: nurses }) => ({
      ...state,
      nurses,
      responseError: null,
    }),
    [SELECT_NURSES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [INSERT_NURSES_SUCCESS]: (state, { payload: nurses }) => ({
      ...state,
      nurses,
    }),
    [INSERT_NURSES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [DELETE_NURSES_SUCCESS]: (state, { payload: nurses }) => ({
      ...state,
      nurses,
    }),
    [DELETE_NURSES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
  },
  initialState,
);
export default nurse;
