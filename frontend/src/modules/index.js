import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import menu, { menuSaga } from './menu';
import management, { managementSaga } from './management';
import loading from './loading';

import member from './member';
const rootReducer = combineReducers({
  loading,
  auth,
  member,
  menu,
  management,
});

export function* rootSaga() {
  yield all([authSaga(), menuSaga(), managementSaga()]);
}

export default rootReducer;
