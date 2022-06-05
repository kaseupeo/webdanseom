import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMember, deleteMemberAsync } from '../../../modules/member';
import { useNavigate } from 'react-router-dom';
import EditPasswordInfo from '../../../components/app/myPage/EditPassword';

const EditPasswordInfoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return <EditPasswordInfo />;
};

export default EditPasswordInfoForm;
