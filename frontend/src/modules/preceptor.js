import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../libs/api/preceptor';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';
import createRequestThunk, {
  createRequestActionTypes as createRequestActionTypesThunk,
} from '../libs/createRequestThunk';
//필드 값 초기화
const INITIALIZE_FORM = 'preceptor/INITIALIZE_FORM';
const CHANGE_PRECEPTOR = 'preceptor/CHANGE_PRECEPTOR';

const [SELECT_PRECEPTOR, SELECT_PRECEPTOR_SUCCESS, SELECT_PRECEPTOR_FAILURE] =
  createRequestActionTypes('preceptor/SELECT_PRECEPTOR');
const [INSERT_PRECEPTOR, INSERT_PRECEPTOR_SUCCESS, INSERT_PRECEPTOR_FAILURE] =
  createRequestActionTypes('preceptor/INSERT_PRECEPTOR');
const [DELETE_PRECEPTOR, DELETE_PRECEPTOR_SUCCESS, DELETE_PRECEPTOR_FAILURE] =
  createRequestActionTypes('preceptor/DELETE_PRECEPTOR');
const [EDIT_PRECEPTOR, EDIT_PRECEPTOR_SUCCESS, EDIT_PRECEPTOR_FAILURE] =
  createRequestActionTypes('preceptor/EDIT_PRECEPTOR');

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const changeNurse = createAction(
  CHANGE_PRECEPTOR,
  ({ index, key, value }) => ({
    index,
    key,
    value,
  }),
);

export const selectPreceptors = createAction(
  SELECT_PRECEPTOR,
  (nurseList) => nurseList,
);

export const insertPreceptor = createAction(
  INSERT_PRECEPTOR,
  (response) => response,
);

export const deletetPreceptors = createAction(
  DELETE_PRECEPTOR,
  (response) => response,
);
export const editPreceptors = createAction(
  EDIT_PRECEPTOR,
  (response) => response,
);

export const selectPreceptorsAsync = createRequestThunk(
  SELECT_PRECEPTOR,
  authAPI.selectPreceptor,
);
export const insertPreceptorAsync = createRequestThunk(
  INSERT_PRECEPTOR,
  authAPI.insertPreceptor,
);
export const deletePreceptorsAsync = createRequestThunk(
  DELETE_PRECEPTOR,
  authAPI.deletePreceptor,
);
export const editPreceptorsAsync = createRequestThunk(
  EDIT_PRECEPTOR,
  authAPI.editPreceptor,
);

const selectPreceptorSaga = createRequestSaga(
  SELECT_PRECEPTOR,
  authAPI.selectPreceptor,
);
const insertPreceptorsSaga = createRequestSaga(
  INSERT_PRECEPTOR,
  authAPI.insertPreceptor,
);
const deletePreceptorsSaga = createRequestSaga(
  DELETE_PRECEPTOR,
  authAPI.deletePreceptor,
);
const editPreceptorsSaga = createRequestSaga(
  EDIT_PRECEPTOR,
  authAPI.editPreceptor,
);

export function* preceptorSaga() {
  yield takeLatest(SELECT_PRECEPTOR, selectPreceptorSaga);
  yield takeLatest(INSERT_PRECEPTOR, insertPreceptorsSaga);
  yield takeLatest(DELETE_PRECEPTOR, deletePreceptorsSaga);
  yield takeLatest(EDIT_PRECEPTOR, editPreceptorsSaga);
}

const initialState = {
  preceptorList: [''],
  response: {
    response: null,
    message: '',
    data: null,
  },

  responseError: null,
};

const preceptor = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [CHANGE_PRECEPTOR]: (state, { payload: { index, key, value } }) =>
      produce(state, (draft) => {
        draft['preceptorList'][index][key] = value;
      }),
    [SELECT_PRECEPTOR_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      preceptorList:
        response.response === 'success'
          ? response.data
          : initialState['preceptorList'],
      response: response,
      responseError: null,
    }),
    [SELECT_PRECEPTOR_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [INSERT_PRECEPTOR_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response,
    }),
    [INSERT_PRECEPTOR_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [EDIT_PRECEPTOR_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response,
    }),
    [EDIT_PRECEPTOR_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
    [DELETE_PRECEPTOR_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response,
    }),
    [DELETE_PRECEPTOR_FAILURE]: (state, { payload: error }) => ({
      ...state,
      responseError: error,
    }),
  },
  initialState,
);
export default preceptor;
