import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import menu, { menuSaga } from './menu';
import loading from './loading';

import member from './member';
const rootReducer = combineReducers({
  loading,
  auth,
  member,
  menu,
});

export function* rootSaga() {
  yield all([authSaga(), menuSaga()]);
}

export default rootReducer;
