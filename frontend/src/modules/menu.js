import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';

//필드 값 초기화
const INITIALIZE_FORM = 'menu/INITIALIZE_FORM';

const [HIDING_MENU] = createRequestActionTypes('menu/HIDING_MENU');

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const hidingMenu = createAction(HIDING_MENU, (hiding) => hiding);

const initialState = {
  hidingMenu: true,

  response: {
    response: null,
    message: null,
    data: null,
  },
  responseError: null,
};

const menu = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),

    [HIDING_MENU]: (state, { payload: hiding }) => ({
      ...state,
      hidingMenu: hiding,
    }),
  },
  initialState,
);

export default menu;
