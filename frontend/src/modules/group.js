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
import createRequestThunk from '../libs/createRequestThunk';
//필드 값 초기화
const INITIALIZE_FORM = 'group/INITIALIZE_FORM';
const CHANGE_FIELD = 'group/CHANGE_FIELD';
const [SELECT_GROUP, SELECT_GROUP_SUCCESS, SELECT_GROUP_FAILURE] =
  createRequestActionTypes('group/SELECT_GROUP');
const [CREATE_GROUP, CREATE_GROUP_SUCCESS, CREATE_GROUP_FAILURE] =
  createRequestActionTypes('group/CREATE_GROUP');
const [JOIN_GROUP, JOIN_GROUP_SUCCESS, JOIN_GROUP_FAILURE] =
  createRequestActionTypes('group/JOIN_GROUP');

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const selectGroup = createAction(SELECT_GROUP, (response) => response);

export const createGroup = createAction(CREATE_GROUP, (response) => response);
export const joinGroup = createAction(JOIN_GROUP, (response) => response);

export const selectGroupAsync = createRequestThunk(
  SELECT_GROUP,
  authAPI.selectGroup,
);
const selectGroupSaga = createRequestSaga(SELECT_GROUP, authAPI.selectGroup);

export const createGroupsAsync = createRequestThunk(
  CREATE_GROUP,
  authAPI.createGroup,
);
export const joinGroupAsync = createRequestThunk(JOIN_GROUP, authAPI.joinGroup);

export function* groupSaga() {
  yield takeLatest(SELECT_GROUP, selectGroupSaga);
}
const initialState = {
  nurseGroup: {
    nurseGroup: {
      seq: null,
      groupName: null,
      headNurseNum: null,
      inviteLink: null,
      numberOfDays: 0,
      numberOfEvenings: 0,
      numberOfNights: 0,
    },
  },
  inputGroupName: null,
  inputInviteCode: null,
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
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),
    [SELECT_GROUP_SUCCESS]: (state, { payload: response }) =>
      produce(state, (draft) => {
        draft['nurseGroup'] =
          response.response === 'success'
            ? response.data
            : initialState['nurseGroup'];
        draft['response'] = response;
        draft['responseError'] = null;
      }),
    [SELECT_GROUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),

    [CREATE_GROUP_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response: response,
      responseError: null,
    }),
    [CREATE_GROUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [JOIN_GROUP_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response: response,
      responseError: null,
    }),
    [JOIN_GROUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
  },
  initialState,
);
export default group;
