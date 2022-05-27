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
  let [nursess, setNursess] = useState([
    {
      nurseSeq: 1,
      name: '김한숙',
      position: '수간호사',
      charge: 'D',
      annualLeave: 10,
      email: 'harry03330@hs.ac.kr',
    },
    {
      nurseSeq: 2,
      name: '이영희',
      position: '일반',
    },
    {
      nurseSeq: 3,
      name: '김진숙',
      position: '일반',
    },
  ]);
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
