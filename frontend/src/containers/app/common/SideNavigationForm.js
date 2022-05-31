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
      switch (selecting) {
        case 0:
          navigate('/app/g/selectGroup'); //그룹생성/참가
          return;
        case 1:
          navigate('/app/g/createGroup'); //그룹생성
          return;
        case 2:
          navigate('/app/g/joinGroup'); //그룹참가
          return;
        default:
          navigate('/app/g/selectGroup');
          return;
      }
    }

    if (headNurseCheck) {
      switch (selecting) {
        case 0:
          navigate('/app/h/managementWork'); //근무표 관리
          return;
        case 1:
          navigate('/app/h/selectWork'); //근무표 조회
          return;
        case 2:
          navigate('/app/h/statisticsWork'); //근무표 통계 조회
          return;
        default:
          navigate('/app/h/managementWork');
          return;
      }
    } else {
      switch (selecting) {
        case 0:
          navigate('/app/n/selectWork'); //근무표 조회
          return;
        case 1:
          navigate('/app/n/requestWork'); //근무 요청
          return;
        case 2:
          navigate('/app/n/statisticsWork'); //근무표 통계 조회
          return;
        default:
          navigate('/app/h/managementWork');
          return;
      }
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
