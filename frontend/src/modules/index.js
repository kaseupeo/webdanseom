import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import menu from './menu';
import management, { managementSaga } from './management';
import group, { groupSaga } from './group';
import loading from './loading';

import member from './member';
const rootReducer = combineReducers({
  loading,
  auth,
  menu,
  member,
  group,
  management,
});

export function* rootSaga() {
  yield all([authSaga(), groupSaga(), managementSaga()]);
}

export default rootReducer;
