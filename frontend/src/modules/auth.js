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

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // signUp, login
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

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const signUpSaga = createRequestSaga(SIGNUP, authAPI.signup);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGNUP, signUpSaga);
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
  auth: {
    response: null,
    message: null,
    data: null,
  },
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
      authError: null,
      auth: {
        response: null,
        message: null,
        data: null,
      },
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
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
