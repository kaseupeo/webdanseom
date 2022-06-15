import SetRelationElement from '../../../../components/app/head/modals/SetRelationElement';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectNursesAsync } from '../../../../modules/nurse';

import { selectPreceptorsAsync } from '../../../../modules/preceptor';
const WorkSheetForm = ({ modalOpen, closeModal }) => {
  const [error, setError] = useState('');
  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const nurseList = useSelector(({ nurse }) => nurse.nurseList);
  const preceptorList = useSelector(({ preceptor }) => preceptor.preceptorList);

  const onClickInsert = () => {};
  const onClickDelete = () => {};

  return (
    <SetRelationElement
      modalOpen={modalOpen}
      closeModal={closeModal}
      onClickInsert={onClickInsert}
      onClickDelete={onClickDelete}
      nurseList={nurseList}
    />
  );
};

export default WorkSheetForm;
