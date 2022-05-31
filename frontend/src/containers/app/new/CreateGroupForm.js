import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm,
  groupStateLoad,
  groupState,
  selectMenu,
} from '../../../modules/menu';
import { useNavigate } from 'react-router-dom';
import CreateGroup from '../../../components/app/new/CreateGroup';
import GroupTemplate from '../../../components/app/new/GroupTemplate';

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
  }, [headNurseCheck, joinGroup, navigate, selecting]);

  return (
    <GroupTemplate>
      <CreateGroup />
    </GroupTemplate>
  );
};

export default LeftNavigationForm;
