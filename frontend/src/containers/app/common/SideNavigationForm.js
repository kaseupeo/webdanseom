import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm,
  groupStateLoad,
  groupState,
} from '../../../modules/menu';

import LeftNavigation from '../../../components/app/nav/LeftNavigation';
import { selector } from 'gsap';

const LeftNavigationForm = () => {
  const dispatch = useDispatch();
  const { joinGroup, headNurseCheck, response, responseError } = useSelector(
    ({ menu }) => ({
      joinGroup: menu.groupState.joinGroup,
      headNurseCheck: menu.groupState.headNurseCheck,
      response: menu.response,
      responseError: menu.responseError,
    }),
  );
  const onClickMenu = (e) => dispatch(initializeForm('hidingMenu'), [dispatch]);
  return (
    <LeftNavigation
      onClickMenu={onClickMenu}
      joinGroup={joinGroup}
      headNurseCheck={headNurseCheck}
    />
  );
};

export default LeftNavigationForm;
