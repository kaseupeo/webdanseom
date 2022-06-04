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
import createRequestThunk from '../libs/createRequestThunk';
import * as authAPI from '../libs/api/member';
import { takeLatest } from 'redux-saga/effects';

//필드 값 초기화
const INITIALIZE_FORM = 'member/INITIALIZE_FORM';
const CHANGE_MEMBER = 'member/CHANGE_MEMBER';
const [SELECT_MEMBER, SELECT_MEMBER_SUCCESS, SELECT_MEMBER_FAILURE] =
  createRequestActionTypes('member/SELECT_MEMBER');
const [UPDATE_MEMBER, UPDATE_MEMBER_SUCCESS, UPDATE_MEMBER_FAILURE] =
  createRequestActionTypes('member/UPDATE_MEMBER');
const [DELETE_MEMBER, DELETE_MEMBER_SUCCESS, DELETE_MEMBER_FAILURE] =
  createRequestActionTypes('member/DELETE_MEMBER');
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const changeMember = createAction(
  CHANGE_MEMBER,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);
export const selectMember = createAction(SELECT_MEMBER, (response) => response);
export const updateMember = createAction(UPDATE_MEMBER, (response) => response);
export const deleteMember = createAction(DELETE_MEMBER, (response) => response);

export const selectMemberAsync = createRequestThunk(
  SELECT_MEMBER,
  authAPI.selectMember,
);
export const updateMemberAsync = createRequestThunk(
  UPDATE_MEMBER,
  authAPI.updateMember,
);
export const deleteMemberAsync = createRequestThunk(
  DELETE_MEMBER,
  authAPI.deleteMember,
);

const selectMemberSaga = createRequestSaga(SELECT_MEMBER, authAPI.selectMember);

export function* memberSaga() {
  yield takeLatest(SELECT_MEMBER, selectMemberSaga);
}

const initialState = {
  passwordInfo: {
    password: null,
    passwordChecked: null,
    newPassword: null,
  },
  memberInfo: {
    memberSeq: null,
    email: null,
    name: null,
    phoneNumber: null,
    nurseSeq: null,
  },
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
    [CHANGE_MEMBER]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [SELECT_MEMBER_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      memberInfo: response.data,
      response: response,
      responseError: null,
    }),
    [SELECT_MEMBER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [UPDATE_MEMBER_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response: response,
      responseError: null,
    }),
    [UPDATE_MEMBER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [DELETE_MEMBER_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response: response,
      responseError: null,
    }),
    [DELETE_MEMBER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
  },
  initialState,
);
export default member;
