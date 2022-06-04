import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMember, deleteMemberAsync } from '../../../modules/member';
import { useNavigate } from 'react-router-dom';
import DeleteUser from '../../../components/app/myPage/DeleteUser';

const DeleteUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return <DeleteUser />;
};

export default DeleteUserForm;
