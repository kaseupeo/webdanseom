import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../libs/api/work';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';
import createRequestThunk from '../libs/createRequestThunk';
//필드 값 초기화
const INITIALIZE_FORM = 'work/INITIALIZE_FORM';
const CHANGE_WORK = 'work/CHANGE_WORK';

const [SELECT_WORK_HEAD, SELECT_WORK_HEAD_SUCCESS, SELECT_WORK_HEAD_FAILURE] =
  createRequestActionTypes('work/SELECT_WORK_HEAD');
const [
  SELECT_WORK_NORMAL,
  SELECT_WORK_NORMAL_SUCCESS,
  SELECT_WORK_NORMAL_FAILURE,
] = createRequestActionTypes('work/SELECT_WORK_NORMAL');
const [INSERT_WORK, INSERT_WORK_SUCCESS, INSERT_WORK_FAILURE] =
  createRequestActionTypes('work/INSERT_WORK');

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const changeNurse = createAction(
  CHANGE_WORK,
  ({ index, key, value }) => ({
    index,
    key,
    value,
  }),
);

export const selectWorksHead = createAction(
  SELECT_WORK_HEAD,
  (response) => response,
);
export const selectWorksNormal = createAction(
  SELECT_WORK_NORMAL,
  (response) => response,
);

export const insertWorks = createAction(INSERT_WORK, (response) => response);

export const selectWorksHeadAsync = createRequestThunk(
  SELECT_WORK_HEAD,
  authAPI.selectWorkHead,
);
export const selectWorksNormalAsync = createRequestThunk(
  SELECT_WORK_NORMAL,
  authAPI.selectWorkNormal,
);
export const insertWorksAsync = createRequestThunk(
  INSERT_WORK,
  authAPI.insertWork,
);

const selectWorksHeadSaga = createRequestSaga(
  SELECT_WORK_HEAD,
  authAPI.selectWorkHead,
);
const selectWorksNormalSaga = createRequestSaga(
  SELECT_WORK_NORMAL,
  authAPI.selectWorkNormal,
);
const insertWorksSaga = createRequestSaga(INSERT_WORK, authAPI.insertWork);

export function* workSaga() {
  yield takeLatest(SELECT_WORK_HEAD, selectWorksHeadSaga);
  yield takeLatest(SELECT_WORK_NORMAL, selectWorksNormalSaga);
  yield takeLatest(INSERT_WORK, insertWorksSaga);
}

const initialState = {
  work: null,
  response: {
    response: null,
    message: '',
    data: null,
  },
  responseError: null,
};

const work = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [CHANGE_WORK]: (state, { payload: { index, key, value } }) =>
      produce(state, (draft) => {
        draft['work'][index][key] = value;
      }),
    [SELECT_WORK_HEAD_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response,
      responseError: null,
    }),
    [SELECT_WORK_HEAD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [SELECT_WORK_NORMAL_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response,
      responseError: null,
    }),
    [SELECT_WORK_NORMAL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [INSERT_WORK_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response,
      responseError: null,
    }),
    [INSERT_WORK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
  },
  initialState,
);
export default work;
