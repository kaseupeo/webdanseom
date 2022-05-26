import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import menu from './menu';
import management, { managementSaga } from './management';
import group, { groupSaga } from './group';
import nurse, { nurseSaga } from './nurse';
import dutyCode, { dutyCodeSaga } from './dutyCode';
import loading from './loading';

import member, { memberSaga } from './member';
const rootReducer = combineReducers({
  loading,
  auth,
  menu,
  member,
  group,
  nurse,
  dutyCode,
  management,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    groupSaga(),
    memberSaga(),
    nurseSaga(),
    dutyCodeSaga(),
    managementSaga(),
  ]);
}

export default rootReducer;
