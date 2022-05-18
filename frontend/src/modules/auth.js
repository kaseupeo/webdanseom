import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';
import * as authAPI from '../libs/api/auth';
import { takeLatest } from 'redux-saga/effects';

//input 요소 변화시 필드 상태 값 적용
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
//필드 값 초기화
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] =
  createRequestActionTypes('auth/SIGNUP');
const [FIND_PASSWORD, FIND_PASSWORD_SUCCESS, FIND_PASSWORD_FAILURE] =
  createRequestActionTypes('auth/FIND_PASSWORD');

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // signUp, login, findPassword
    key, // email,password, passwordConfirm, name, phoneNumber
    value, // 실제 바꾸려는 값
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));

export const signUp = createAction(
  SIGNUP,
  ({ email, password, name, phoneNumber }) => ({
    email,
    password,
    name,
    phoneNumber,
  }),
);

export const findPassword = createAction(FIND_PASSWORD, ({ email }) => ({
  email,
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const signUpSaga = createRequestSaga(SIGNUP, authAPI.signup);
const findPasswordSaga = createRequestSaga(FIND_PASSWORD, authAPI.findPassword);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGNUP, signUpSaga);
  yield takeLatest(FIND_PASSWORD, findPasswordSaga);
}

const initialState = {
  signUp: {
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phoneNumber: '',
  },
  login: {
    email: '',
    password: '',
  },
  findPassword: {
    email: '',
  },
  auth: {
    response: null,
    message: null,
    data: null,
  },

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
      auth: {
        response: null,
        message: null,
        data: null,
      },
      authError: null,
    }),

    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [FIND_PASSWORD_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [FIND_PASSWORD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
