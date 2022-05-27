import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm as mInitializeForm,
  hidingMenu,
  setGroupState,
} from '../../../modules/menu';
import {
  initializeForm as gInitializeForm,
  groupInfo,
  setGroupInfo,
} from '../../../modules/group';
import { login, logout } from '../../../modules/auth';
import { loginState } from '../../../modules/menu';

import TopNavigation from '../../../components/app/nav/TopNavigation';
import { useNavigate } from 'react-router-dom';

const TopNavigationForm = () => {
  const [error, setError] = useState('');
  const [checkHiding, setCheckHiding] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { response } = useSelector(({ group }) => ({
    response: group.response,
  }));
  const { loginStateNow, groupName } = useSelector(({ menu }) => ({
    loginStateNow: menu.loginState,
    groupName: menu.groupState.groupName,
  }));

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
    if (loginStateNow === null) return;
    if (!loginStateNow) {
      navigate('/auth/login');
      alert('서비스 이용 시 로그인이 필요합니다');
    }
  }, [loginStateNow]);
  useEffect(() => {
    dispatch(groupInfo());

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
      } else {
        dispatch(
          setGroupState({
            groupName: '',
            joinGroup: false,
            headNurseCheck: false,
          }),
        );
      }
      dispatch(setGroupInfo(response.data));
    }
    if (response.message === '그룹조회 실패') {
      dispatch(
        setGroupState({
          groupName: '',
          joinGroup: false,
          headNurseCheck: false,
        }),
      );
      if (response.data === 'selectGroup(), 가입이 되어 있지 않습니다.')
        dispatch(loginState(true));
      else dispatch(loginState(false));
    }
  }, [dispatch, response.message]);
  return (
    <TopNavigation
      groupName={groupName}
      onClickMenu={onClickMenu}
      onClickLogout={onClickLogout}
      error={error}
    />
  );
};

export default TopNavigationForm;
