import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import member, {
  changeMember,
  deleteMemberAsync,
} from '../../../modules/member';
import { useNavigate } from 'react-router-dom';
import DeleteUser from '../../../components/app/myPage/DeleteUser';

const DeleteUserForm = () => {
  const dispatch = useDispatch();

  const { email, password } = useSelector(({ member }) => ({
    email: member.memberInfo.email,
    password: member.deleteInfo.password,
  }));
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeMember({ form: 'deleteInfo', key: name, value }));
  };
  const onClick = () => {
    dispatch(deleteMemberAsync({ email, password }));
  };
  return <DeleteUser onChange={onChange} onClick={onClick} />;
};

export default DeleteUserForm;
