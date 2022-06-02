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
  const {
    groupChecked,
    joinGroup,
    headNurseCheck,
    selecting,
    response,
    responseError,
  } = useSelector(({ menu }) => ({
    groupChecked: menu.groupState.groupChecked,
    joinGroup: menu.groupState.joinGroup,
    headNurseCheck: menu.groupState.headNurseCheck,
    selecting: menu.selectMenu,
    response: menu.response,
    responseError: menu.responseError,
  }));

  useEffect(() => {
    if (!groupChecked) navigate('/app');
    else if (!joinGroup) {
      navigate('/app/g/selectGroup');
    } else if (headNurseCheck) {
      navigate('/app/h/managementWork');
    } else {
      navigate('/app/n/selectWork');
    }
  }, [headNurseCheck, joinGroup]);
  const onClickMenu0 = () => {
    if (!joinGroup) {
      navigate('/app/g/selectGroup'); //그룹생성/참가
    } else if (headNurseCheck) {
      navigate('/app/h/managementWork'); //그룹생성
    } else {
      navigate('/app/n/selectWork'); //그룹참가
    }
  };
  const onClickMenu1 = () => {
    if (!joinGroup) {
      navigate('/app/g/createGroup'); //근무표 관리
    } else if (headNurseCheck) {
      navigate('/app/h/selectWork'); //근무표 조회
    } else {
      navigate('/app/n/requestWork'); //근무표 통계 조회
    }
  };
  const onClickMenu2 = () => {
    if (!joinGroup) {
      navigate('/app/g/joinGroup'); //근무표 조회
    } else if (headNurseCheck) {
      navigate('/app/h/statisticsWork'); //근무 요청
    } else {
      navigate('/app/n/statisticsWork'); //근무표 통계 조회
    }
  };

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
