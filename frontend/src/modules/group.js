/**
 * 작성자: 정진욱
 * 그룹에 관한 리덕스 설정
 *
 */
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../libs/api/group';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';
//필드 값 초기화
const INITIALIZE_FORM = 'group/INITIALIZE_FORM';
const SET_GROUP_INFO = 'group/SET_GROUP_INFO';
const [GROUP, GROUP_SUCCESS, GROUP_FAILURE] =
  createRequestActionTypes('group/GROUP');

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const groupInfo = createAction(GROUP, (group) => group);
export const setGroupInfo = createAction(
  SET_GROUP_INFO,
  (nurseGroup) => nurseGroup,
);
const groupInfoSaga = createRequestSaga(GROUP, authAPI.groupState);

export function* groupSaga() {
  yield takeLatest(GROUP, groupInfoSaga);
}
const initialState = {
  nurseGroup: {
    seq: null,
    groupName: null,
    headNurseNum: null,
    inviteLink: null,
    numberOfDays: 0,
    numberOfEvenings: 0,
    numberOfNights: 0,
  },
  response: {
    response: null,
    message: '',
    data: null,
  },

  responseError: null,
};

const group = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),

    [GROUP_SUCCESS]: (state, { payload: group }) => ({
      ...state,
      response: group,
      responseError: null,
    }),
    [GROUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [SET_GROUP_INFO]: (state, { payload: nurseGroup }) => ({
      ...state,
      nurseGroup,
    }),
  },
  initialState,
);
export default group;
