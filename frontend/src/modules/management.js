/**
 * 작성자: 정진욱
 * 회원에 관한 리덕스 설정
 *
 */

import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';
import * as authAPI from '../libs/api/management';
import { takeLatest } from 'redux-saga/effects';

const now = new Date();
//필드 값 초기화
const INITIALIZE_FORM = 'management/INITIALIZE_FORM';

const SET_PLUS_M = 'management/SET_PLUS_M';
const SET_MINUS_M = 'management/SET_MINUS_M';
const SET_PLUS_Y = 'management/SET_PLUS_Y';
const SET_MINUS_Y = 'management/SET_MINUS_Y';

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const setPlusM = createAction(SET_PLUS_M);
export const setMinusM = createAction(SET_MINUS_M);
export const setPlusY = createAction(SET_PLUS_Y);
export const setMinusY = createAction(SET_MINUS_Y);

const initialState = {
  date: {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  },
  response: {
    response: null,
    message: null,
    data: null,
  },

  responseError: null,
};
export function* managementSaga() {}

const management = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,

      [form]: initialState[form],
    }),
    [SET_PLUS_M]: (state) => ({
      ...state,
      date: {
        year: state.date.year,
        month: state.date.month + 1,
      },
    }),
    [SET_MINUS_M]: (state) => ({
      ...state,
      date: {
        year: state.date.year,
        month: state.date.month - 1,
      },
    }),
    [SET_PLUS_Y]: (state) => ({
      ...state,
      date: {
        year: state.date.year + 1,
        month: 1,
      },
    }),
    [SET_MINUS_Y]: (state) => ({
      ...state,
      date: {
        year: state.date.year - 1,
        month: 12,
      },
    }),
  },
  initialState,
);
export default management;
