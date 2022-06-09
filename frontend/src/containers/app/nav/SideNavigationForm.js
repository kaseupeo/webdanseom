import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import SideNavigation from '../../../components/app/nav/SideNavigation';

const LeftNavigationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { joinGroup, headNurseCheck } = useSelector(({ menu }) => ({
    joinGroup: menu.groupState.joinGroup,
    headNurseCheck: menu.groupState.headNurseCheck,
  }));

  useEffect(() => {
    if (joinGroup === null) {
      return;
    }
    if (!joinGroup) {
      navigate('/app/g/selectGroup', { replace: true });
    } else if (headNurseCheck) {
      navigate('/app/h/managementWork', { replace: true });
    } else {
      navigate('/app/n/selectWork', { replace: true });
    }
  }, [headNurseCheck, joinGroup, dispatch]);
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
