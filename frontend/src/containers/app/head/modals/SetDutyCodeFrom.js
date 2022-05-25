import SetDutyCodeElement from '../../../../components/app/head/modals/SetDutyCodeElement';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const WorkSheetForm = ({ modalOpen, closeModal }) => {
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const onClickInsert = () => {};
  const onClickDelete = () => {};

  return <SetDutyCodeElement modalOpen={modalOpen} closeModal={closeModal} />;
};

export default WorkSheetForm;
