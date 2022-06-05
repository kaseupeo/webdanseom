import SetRelationElement from '../../../../components/app/head/modals/SetRelationElement';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectNursesAsync } from '../../../../modules/nurse';
const WorkSheetForm = ({ modalOpen, closeModal }) => {
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const nurseList = useSelector(({ nurse }) => nurse.nurseList);
  useEffect(() => {
    dispatch(selectNursesAsync());
  }, []);
  const onClickInsert = () => {};
  const onClickDelete = () => {};

  return (
    <SetRelationElement
      modalOpen={modalOpen}
      closeModal={closeModal}
      nurseList={nurseList}
    />
  );
};

export default WorkSheetForm;
