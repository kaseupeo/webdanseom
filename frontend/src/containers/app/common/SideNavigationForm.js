import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm,
  groupStateLoad,
  groupState,
  selectMenu,
} from '../../../modules/menu';
import { useNavigate } from 'react-router-dom';
import SideNavigation from '../../../components/app/nav/SideNavigation';
import { selector } from 'gsap';

const LeftNavigationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { joinGroup, headNurseCheck, selecting, response, responseError } =
    useSelector(({ menu }) => ({
      joinGroup: menu.groupState.joinGroup,
      headNurseCheck: menu.groupState.headNurseCheck,
      selecting: menu.selectMenu,
      response: menu.response,
      responseError: menu.responseError,
    }));
  const onClickMenu0 = () => {
    dispatch(selectMenu(0));
  };
  const onClickMenu1 = () => {
    dispatch(selectMenu(1));
  };
  const onClickMenu2 = () => {
    dispatch(selectMenu(2));
  };

  useEffect(() => {
    if (!joinGroup) {
      navigate('/app');
      return;
    }

    if (headNurseCheck)
      switch (selecting) {
        case 0:
          navigate('/app/h/managementWork');
          return;
        case 1:
          navigate('/app/h/selectWork');
          return;
        case 2:
          navigate('/app/h/statisticsWork');
          return;
        default:
          navigate('/app/h/managementWork');
          return;
      }
    else {
    }
  }, [headNurseCheck, joinGroup, navigate, selecting]);

  return (
    <SideNavigation
      joinGroup={joinGroup}
      headNurseCheck={headNurseCheck}
      onClickMenu0={onClickMenu0}
      onClickMenu1={onClickMenu1}
      onClickMenu2={onClickMenu2}
    />
  );
};

export default LeftNavigationForm;
