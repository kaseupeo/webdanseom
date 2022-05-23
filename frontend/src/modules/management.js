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

const SET_Y_AND_M = 'management/SET_Y_AND_M';

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const setYAndM = createAction(SET_Y_AND_M, (year, month) => ({
  year: year,
  month: month,
}));

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
    [SET_Y_AND_M]: (state, { padyload: date }) => ({
      ...state,
      date: date,
    }),
  },
  initialState,
);
export default management;
