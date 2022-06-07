import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm as mInitializeForm,
  hidingMenu,
  setGroupState,
} from '../../../modules/menu';
import {
  initializeForm as gInitializeForm,
  selectGroup,
} from '../../../modules/group';
import { selectMember } from '../../../modules/member';
import { login, logout } from '../../../modules/auth';
import { loginState } from '../../../modules/menu';

import TopNavigation from '../../../components/app/nav/TopNavigation';
import { useNavigate } from 'react-router-dom';

const TopNavigationForm = () => {
  const [error, setError] = useState('');
  const [checkHiding, setCheckHiding] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mResponse } = useSelector(({ member }) => ({
    mResponse: member.response,
  }));
  const { response } = useSelector(({ group }) => ({
    response: group.response,
  }));
  const { loginStateNow, groupName } = useSelector(({ menu }) => ({
    loginStateNow: menu.loginState,
    groupName: menu.groupState.groupName,
  }));
  const { memberName } = useSelector(({ member }) => ({
    memberName: member.memberInfo.name,
  }));
  useEffect(() => {
    dispatch(selectMember());
  }, []);

  const onClickMenu = (e) => {
    e.preventDefault();
    if (checkHiding) setCheckHiding(false);
    else setCheckHiding(true);
    dispatch(hidingMenu(checkHiding));
  };
  const onClickLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(loginState(false));
    navigate('/auth/login');
  };
  useEffect(() => {
    dispatch(selectMember());
    if (mResponse.message === '회원 정보 조회 실패') {
      alert(
        '로그인 상태가 아니거나 만료되었습니다.\n 로그인 화면으로 이동합니다',
      );
      navigate('/auth/login');
    }
  }, [navigate, dispatch, mResponse.message]);
  useEffect(() => {
    dispatch(selectGroup());

    if (response.message === '그룹조회 성공') {
      dispatch(loginState(true));
      if (response.data.joinGroup === true) {
        dispatch(
          setGroupState({
            groupName: response.data.nurseGroup.groupName,
            joinGroup: response.data.joinGroup,
            headNurseCheck: response.data.headNurseCheck,
          }),
        );
        dispatch(loginState(true));
      } else {
        dispatch(
          setGroupState({
            groupName: '',
            joinGroup: false,
            headNurseCheck: false,
          }),
        );
      }
      dispatch(selectGroup(response.data.nurseGroup));
    }
    if (response.message === '그룹조회 실패') {
      if ('가입이 되어 있지 않습니다.') {
        dispatch(
          setGroupState({
            groupName: '',
            joinGroup: false,
            headNurseCheck: false,
          }),
        );
        dispatch(loginState(true));
      } else if (
        response.data ===
        'Cannot invoke "javax.servlet.http.Cookie.getValue()" because "token" is null'
      ) {
        dispatch(
          setGroupState({
            groupName: '',
            joinGroup: false,
            headNurseCheck: false,
          }),
        );
        dispatch(loginState(false));
      } else {
        dispatch(
          setGroupState({
            groupName: '',
            joinGroup: false,
            headNurseCheck: false,
          }),
        );
        dispatch(loginState(false));
      }
    }
  }, [dispatch, response.message]);
  return (
    <TopNavigation
      groupName={groupName}
      memberName={memberName}
      onClickMenu={onClickMenu}
      onClickLogout={onClickLogout}
      error={error}
    />
  );
};

export default TopNavigationForm;
