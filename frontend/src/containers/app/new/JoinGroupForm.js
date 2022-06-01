import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm,
  groupStateLoad,
  groupState,
  selectMenu,
} from '../../../modules/menu';
import { changeField, joinGroupAsync } from '../../../modules/group';

import { useNavigate } from 'react-router-dom';
import JoinGroup from '../../../components/app/new/JoinGroup';
import GroupTemplate from '../../../components/app/new/GroupTemplate';
const JoinGroupForm = () => {
  const [errorMSG, setErrorMSG] = useState('');
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
  const { inviteLink, gResponse, gResponseError } = useSelector(
    ({ group }) => ({
      inviteLink: group.inputInviteCode,

      response: group.response,
      responseError: group.responseError,
    }),
  );
  const onClickMenu0 = () => {
    dispatch(selectMenu(0));
    navigate('/app/g/selectGroup');
  };
  const onChange = (e) => {
    const { value } = e.target;
    dispatch(
      changeField({
        key: 'inputInviteCode',
        value,
      }),
    );
  };

  const onClickJoin = (e) => {
    e.preventDefault();
    dispatch(joinGroupAsync(inviteLink));
  };
  //마이페이지 추가후 수정할것
  useEffect(() => {
    if (response.response === 'error')
      setErrorMSG('해당 초대장은 만료되었거나 존재하지 않습니다.');
  }, [response]);
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
        errorMSG={errorMSG}
      />
    </GroupTemplate>
  );
};

export default JoinGroupForm;
