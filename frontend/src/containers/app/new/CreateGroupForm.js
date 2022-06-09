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
import {
  initializeForm as ginitializeForm,
  changeField,
  createGroupsAsync,
} from '../../../modules/group';
const CreateGroupForm = () => {
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
  const { groupName, gResponse, gResponseError } = useSelector(({ group }) => ({
    groupName: group.inputGroupName,
    gResponse: group.response,
    gResponseError: group.responseError,
  }));
  const onClickMenu0 = () => {
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
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGroupsAsync({ groupName }))
      .then(navigate('/app'))
      .then(window.location.replace(window.location.pathname));
  };

  return (
    <GroupTemplate>
      <CreateGroup
        onClickMenu0={onClickMenu0}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </GroupTemplate>
  );
};

export default CreateGroupForm;
