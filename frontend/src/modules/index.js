import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import menu from './menu';
import member from './member';
const rootReducer = combineReducers({
  loading,
  auth,
  member,
  menu,
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;
