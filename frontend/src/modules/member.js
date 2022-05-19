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
import * as authAPI from '../libs/api/auth';
import { takeLatest } from 'redux-saga/effects';

//필드 값 초기화
const INITIALIZE_FORM = 'member/INITIALIZE_FORM';

const [GROUP, GROUP_SUCCESS, GROUP_FAILURE] =
  createRequestActionTypes('member/GROUP');

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

const initialState = {
  group: {
    groupName: null,
  },
  response: {
    response: null,
    message: null,
    data: null,
  },

  responseError: null,
};

export const group = createAction(GROUP, ({ groupName }) => ({
  groupName,
}));

const member = handleActions({
  [INITIALIZE_FORM]: (state, { payload: form }) => ({
    ...state,
    [form]: initialState[form],
    response: {
      response: null,
      message: null,
      data: null,
    },
    responseError: null,
  }),
  [GROUP_SUCCESS]: (state, { payload: response }) => ({
    ...state,
    response,
    responseError: null,
  }),
  [GROUP_FAILURE]: (state, { payload: error }) => ({
    ...state,
    responseError: error,
  }),
  initialState,
});
export default member;
