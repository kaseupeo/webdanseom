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
  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const nurses = useSelector(({ nurse }) => nurse.nurses);
  const dispatch = useDispatch();

  const onClickInsert = () => {
    dispatch(
      insertNurses({
        name: '홍길동',
        charge: '주중 전담',
        position: '일반',
        annualLeave: 0,
      }),
    );
    dispatch(selectNurses({ groupSeq }));
  };
  const onClickDelete = () => {};

  useEffect(() => {
    if (groupSeq === null) return;

    dispatch(selectNurses({ groupSeq }));
  }, [dispatch, groupSeq]);

  return (
    <SetNurseElement
      modalOpen={modalOpen}
      closeModal={closeModal}
      onClickInsert={onClickInsert}
      onClickDelete={onClickDelete}
      nurses={nurses}
    />
  );
};

export default WorkSheetForm;
