import SetNurseElement from '../../../../components/app/head/modals/SetNurseElement';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  initializeForm,
  selectNurses,
  insertNurses,
  deletetNurses,
  editNurses,
  changeNurse,
} from '../../../../modules/nurse';

const WorkSheetForm = ({ modalOpen, closeModal }) => {
  const [flag, setFlag] = useState(false);
  const flagFuction = () => {
    if (flag) setFlag(false);
    else setFlag(true);
  };

  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const nurseList = useSelector(({ nurse }) => nurse.nurseList);
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
    flagFuction();
  };
  const onClickDelete = (e) => {
    alert(e);
    dispatch(deletetNurses({}));
  };
  const onClickUpdate = () => {
    dispatch(editNurses({ nurseList }));
  };
  const onCheckedBox = () => {
    // dispatch(setCheckedNurse(e));
  };
  useEffect(() => {
    if (groupSeq === null) return;

    dispatch(selectNurses({ groupSeq }));
  }, [flag]);
  const onChange = (e) => {
    const { value, name, id } = e.target;

    console.log(id);
    dispatch(
      changeNurse({
        index: id,
        key: name,
        value,
      }),
    );
  };
  return (
    <SetNurseElement
      modalOpen={modalOpen}
      closeModal={closeModal}
      onChange={onChange}
      onClickInsert={onClickInsert}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      nurseList={nurseList}
    />
  );
};

export default WorkSheetForm;
