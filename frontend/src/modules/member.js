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
import * as authAPI from '../libs/api/member';
import { takeLatest } from 'redux-saga/effects';

//필드 값 초기화
const INITIALIZE_FORM = 'member/INITIALIZE_FORM';

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

const [MEMBER, MEMBER_SUCCESS, MEMBER_FAILURE] =
  createRequestActionTypes('member/MEMBER');

export const memberInfo = createAction(MEMBER, (member) => member);

const memberUpdateSaga = createRequestSaga(MEMBER, authAPI.memberUpdate);

export function* memberSaga() {
  yield takeLatest(MEMBER, memberUpdateSaga);
}

const initialState = {
  response: {
    response: null,
    message: null,
    data: null,
  },

  responseError: null,
};

const member = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [MEMBER_SUCCESS]: (state, { payload: member }) => ({
      ...state,
      response: member,
      responseError: null,
    }),
    [MEMBER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
  },
  initialState,
);
export default member;
