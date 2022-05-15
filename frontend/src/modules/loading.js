/* 액션함수를 시작하고 종료하는 시점을 알려줌(로딩)
 * 작성자: 정진욱
 *
 */
import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// 시작되는 시점
export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
);
// 종료되는 시점
export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType,
);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;
