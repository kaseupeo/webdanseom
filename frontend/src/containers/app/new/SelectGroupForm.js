import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initializeForm,
  groupStateLoad,
  groupState,
  selectMenu,
} from '../../../modules/menu';
import { useNavigate } from 'react-router-dom';
import SelectGroup, {
  SelectGroupTemplate,
} from '../../../components/app/new/SelectGroup';
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
    navigate('/app/g/selectGroup');
  };
  const onClickMenu1 = () => {
    navigate('/app/g/createGroup');
  };
  const onClickMenu2 = () => {
    navigate('/app/g/joinGroup');
  };

  return (
    <GroupTemplate>
      <SelectGroup onClickMenu1={onClickMenu1} onClickMenu2={onClickMenu2} />
    </GroupTemplate>
  );
};

export default LeftNavigationForm;
