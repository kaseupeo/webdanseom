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

  const nurses = useSelector(({ nurse }) => nurse.nurses);
  const dispatch = useDispatch();

  const onClickInsert = () => {};
  const onClickDelete = () => {};

  return (
    <SetNurseElement
      modalOpen={modalOpen}
      closeModal={closeModal}
      nurses={nurses}
    />
  );
};

export default WorkSheetForm;
