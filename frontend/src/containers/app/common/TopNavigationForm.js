import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm,
  hidingMenu,
  groupStateLoad,
  groupState,
} from '../../../modules/menu';

import TopNavigation from '../../../components/app/nav/TopNavigation';
import { selector } from 'gsap';

const TopNavigationForm = () => {
  const [error, setError] = useState('');
  const [checkHiding, setCheckHiding] = useState(false);
  const dispatch = useDispatch();

  const {
    hiding,
    groupName,
    isJoinGroup,
    headNurseCheck,
    response,
    responseError,
  } = useSelector(({ menu }) => ({
    hiding: menu.hidingMenu,
    groupName: menu.groupState.groupName,
    isJoinGroup: menu.groupState.isJoinGroup,
    headNurseCheck: menu.groupState.headNurseCheck,
    response: menu.response,
    responseError: menu.responseError,
  }));

  // 인풋 변경 이벤트 핸들러
  const onClickMenu = (e) => {
    e.preventDefault();
    if (checkHiding) setCheckHiding(false);
    else setCheckHiding(true);
    dispatch(hidingMenu(checkHiding));
  };
  // 폼 등록 이벤트 핸들러

  useEffect(() => {
    dispatch(initializeForm('hidingMenu'));
  }, [dispatch]);
  useEffect(() => {
    dispatch(groupStateLoad());

    if (response.message === '그룹조회 성공') {
      if (response.data.joinGroup === true) {
        dispatch(
          groupState({
            groupName: response.data.nurseGroup.groupName,
            joinGroup: response.data.joinGroup,
            headNurseCheck: response.data.headNurseCheck,
          }),
        );
      } else {
        dispatch(
          groupState({
            groupName: '',
            joinGroup: false,
            headNurseCheck: false,
          }),
        );
      }
    }
    if (response.message === '그룹조회 실패') {
      dispatch(
        groupState({
          groupName: '',
          joinGroup: false,
          headNurseCheck: false,
        }),
      );
    }
  }, [dispatch, response.message]);
  return (
    <TopNavigation
      groupName={groupName}
      onClickMenu={onClickMenu}
      error={error}
    />
  );
};

export default TopNavigationForm;
