import SetNurseElement from '../../../../components/app/head/modals/SetNurseElement';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  initializeForm,
  selectNurses,
  insertNurses,
  deletetNurses,
} from '../../../../modules/nurse';
const WorkSheetForm = ({ modalOpen, closeModal }) => {
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const groupSeq = useSelector((state) => state.group.nurseGroup.seq);

  useEffect(() => {
    dispatch(selectNurses({ seq: '3' }));
  }, [groupSeq]);

  const onClickInsert = () => {};
  const onClickDelete = () => {};

  return <SetNurseElement modalOpen={modalOpen} closeModal={closeModal} />;
};

export default WorkSheetForm;
