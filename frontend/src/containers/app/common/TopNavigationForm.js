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
} from '../../../modules/group';

import TopNavigation from '../../../components/app/nav/TopNavigation';
import { selector } from 'gsap';

const TopNavigationForm = () => {
  const [error, setError] = useState('');
  const [checkHiding, setCheckHiding] = useState(false);
  const dispatch = useDispatch();

  const { response } = useSelector(({ group }) => ({
    response: group.response,
  }));
  const { groupName, joinGroup, headNurseCheck } = useSelector(({ menu }) => ({
    groupName: menu.groupState.groupName,
    joinGroup: menu.groupState.joinGroup,
    headNurseCheck: menu.groupState.headNurseCheck,
  }));

  const onClickMenu = (e) => {
    e.preventDefault();
    if (checkHiding) setCheckHiding(false);
    else setCheckHiding(true);
    dispatch(hidingMenu(checkHiding));
  };

  useEffect(() => {
    dispatch(groupInfo());
    if (response.message === '그룹조회 성공') {
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
    }
    if (response.message === '그룹조회 실패') {
      dispatch(
        setGroupState({
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
