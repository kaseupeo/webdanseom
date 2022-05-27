import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';

//필드 값 초기화
const INITIALIZE_FORM = 'menu/INITIALIZE_FORM';

const [LOGIN_STATE] = createRequestActionTypes('menu/LOGIN_STATE');
const [HIDING_MENU] = createRequestActionTypes('menu/HIDING_MENU');
const [SELECT_MENU] = createRequestActionTypes('menu/SELECT_MENU');
const [GROUP_STATE] = createRequestActionTypes('menu/GROUP_STATE');

export const loginState = createAction(LOGIN_STATE, (loginState) => loginState);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const hidingMenu = createAction(HIDING_MENU, (hiding) => hiding);
export const selectMenu = createAction(SELECT_MENU, (selecting) => selecting);

export const setGroupState = createAction(
  GROUP_STATE,
  ({ groupName, joinGroup, headNurseCheck }) => ({
    groupName,
    joinGroup,
    headNurseCheck,
  }),
);

const initialState = {
  loginState: null,
  hidingMenu: true,
  selectMenu: 0,
  groupState: {
    groupName: null,
    joinGroup: false,
    headNurseCheck: false,
  },
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
    [LOGIN_STATE]: (state, { payload: loginState }) => ({
      ...state,
      loginState: loginState,
    }),
    [GROUP_STATE]: (
      state,
      { payload: { groupName, joinGroup, headNurseCheck } },
    ) => ({
      ...state,
      groupState: {
        groupName: groupName,
        joinGroup: joinGroup,
        headNurseCheck: headNurseCheck,
      },
    }),
    [HIDING_MENU]: (state, { payload: hiding }) => ({
      ...state,
      hidingMenu: hiding,
    }),
    [SELECT_MENU]: (state, { payload: selecting }) => ({
      ...state,
      selectMenu: selecting,
    }),
  },
  initialState,
);

export default menu;
