import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
// import member from './member';
import menu from './menu';
const rootReducer = combineReducers({
  loading,
  auth,

  menu,
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;
