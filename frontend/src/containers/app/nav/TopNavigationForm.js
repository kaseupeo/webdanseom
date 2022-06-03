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
  const { memberName } = '김현숙';

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
