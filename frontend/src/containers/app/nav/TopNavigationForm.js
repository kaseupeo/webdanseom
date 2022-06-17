import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm as menuInit,
  hidingMenu,
  setGroupState,
} from '../../../modules/menu';
import {
  initializeForm as gInit,
  selectGroupAsync,
} from '../../../modules/group';
import {
  initAsync,
  initializeForm as memberInit,
  selectMember,
  initLoginState,
  selectMemberAsync,
} from '../../../modules/member';
import { logoutSync } from '../../../modules/auth';

import TopNavigation from '../../../components/app/nav/TopNavigation';
import { Redirect, useNavigate } from 'react-router-dom';

const TopNavigationForm = () => {
  const [error, setError] = useState('');
  const [checkHiding, setCheckHiding] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { nurseGroup } = useSelector(({ group }) => ({
    nurseGroup: group.nurseGroup,
  }));
  const { groupName } = useSelector(({ menu }) => ({
    groupName: menu.groupState.groupName,
  }));
  const { memberInfo } = useSelector(({ member }) => ({
    memberInfo: member.memberInfo,
  }));
  const { loginState } = useSelector(({ member }) => ({
    loginState: member.loginState,
  }));

  const onClickRefresh = () => {
    window.location.replace(window.location.pathname);
  };
  const onClickMenu = (e) => {
    e.preventDefault();
    if (checkHiding) setCheckHiding(false);
    else setCheckHiding(true);
    dispatch(hidingMenu(checkHiding));
  };
  const onClickLogout = () => {
    dispatch(memberInit('memberInfo'));
    dispatch(logoutSync())
      .then(dispatch(initLoginState()))
      .then(
        dispatch(
          setGroupState({
            groupName: null,
            joinGroup: null,
            headNurseCheck: null,
          }),
        ),
      )
      .then(navigate('/auth/login'));
  };

  useEffect(() => {
    dispatch(selectMemberAsync()).then(
      dispatch(selectGroupAsync(memberInfo.groupSeq)),
    );
  }, [navigate, dispatch]);

  useEffect(() => {
    if (loginState === null) return;
    if (loginState === false) {
      alert(
        '로그인 상태가 아니거나 만료되었습니다.\n 로그인 화면으로 이동합니다',
      );
      dispatch(initLoginState());
      dispatch(memberInit('response'));
      navigate('/auth/login');
      return;
    }
  }, [loginState]);
  useEffect(() => {
    if (nurseGroup.nurseSeq !== null) {
      dispatch(
        setGroupState({
          groupName: nurseGroup.nurseGroup.groupName
            ? nurseGroup.nurseGroup.groupName
            : false,
          joinGroup: nurseGroup.joinGroup ? nurseGroup.joinGroup : false,
          headNurseCheck: nurseGroup.headNurseCheck
            ? nurseGroup.headNurseCheck
            : false,
        }),
      );
    } else {
      dispatch(
        setGroupState({
          groupName: null,
          joinGroup: null,
          headNurseCheck: null,
        }),
      );
    }
  }, [nurseGroup]);

  return (
    <TopNavigation
      groupName={groupName}
      memberName={memberInfo.name}
      onClickMenu={onClickMenu}
      onClickLogout={onClickLogout}
      error={error}
      onClickRefresh={onClickRefresh}
    />
  );
};

export default TopNavigationForm;
