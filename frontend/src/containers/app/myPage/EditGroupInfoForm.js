import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import EditGroupInfo from '../../../components/app/myPage/EditGroupInfo';

const EditGroupInfoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return <EditGroupInfo />;
};

export default EditGroupInfoForm;
