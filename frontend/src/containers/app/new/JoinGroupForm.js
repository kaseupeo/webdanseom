import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm,
  groupStateLoad,
  groupState,
  selectMenu,
} from '../../../modules/menu';
import { changeField, joinGroupThunk } from '../../../modules/group';

import { useNavigate } from 'react-router-dom';
import JoinGroup from '../../../components/app/new/JoinGroup';
import GroupTemplate from '../../../components/app/new/GroupTemplate';
const JoinGroupForm = () => {
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
    navigate('/app/g/selectGroup');
  };
  const onChange = (e) => {
    const { value } = e.target;
    dispatch(
      changeField({
        key: 'inputGroupName',
        value,
      }),
    );
  };

  const onClickJoin = (e) => {
    e.preventDefault();
    const inviteCode = e.target.value;
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
      <JoinGroup
        onClickMenu0={onClickMenu0}
        onClickJoin={onClickJoin}
        onChange={onChange}
      />
    </GroupTemplate>
  );
};

export default JoinGroupForm;
