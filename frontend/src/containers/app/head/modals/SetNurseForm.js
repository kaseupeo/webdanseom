import SetNurseElement from '../../../../components/app/head/modals/SetNurseElement';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const WorkSheetForm = ({ modalOpen, closeModal }) => {
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const onClickInsert = () => {};
  const onClickDelete = () => {};

  return <SetNurseElement />;
};

export default WorkSheetForm;
