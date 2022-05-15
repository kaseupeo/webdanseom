import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';
import * as authAPI from '../libs/api/auth';
import { takeLatest } from '@redux-saga/core/effects';

//input 요소 변화시 필드 상태 값 적용
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
//필드 값 초기화
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');
const [SignUp, SignUp_SUCCESS, SignUp_FAILURE] =
  createRequestActionTypes('auth/SignUp');
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // signUp, login
    key, // email,password, passwordConfirm, name, phone
    value, // 실제 바꾸려는 값
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));

export const signUp = createAction(
  SignUp,
  ({ email, password, userName, phone }) => ({
    email,
    password,
    userName,
    phone,
  }),
);

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const signUpSaga = createRequestSaga(SignUp, authAPI.signup);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SignUp, signUpSaga);
}

const initialState = {
  signUp: {
    email: '',
    password: '',
    passwordConfirm: '',
    userName: '',
    phone: '',
  },
  login: {
    email: '',
    password: '',
  },
  auth: null,
  headers: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
      headers: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SignUp_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SignUp_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
