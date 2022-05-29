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
  const [checkedNurseList, setCheckedNurseList] = useState(['']);
  const flagFuction = () => {
    if (flag) setFlag(false);
    else setFlag(true);
  };

  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const nurseList = useSelector(({ nurse }) => nurse.nurseList);
  const dispatch = useDispatch();

  const initNurseList = () => {
    setCheckedNurseList([]);
  };
  const onClickInsert = () => {
    dispatch(
      insertNurses({
        name: '홍길동',
        charge: '주중 전담',
        position: '일반',
        annualLeave: 0,
      }),
    );
    initNurseList();
    setCheckedNurseList([]);
    flagFuction();
  };
  useEffect(() => {
    initNurseList();
  }, [dispatch]);
  const onClickDelete = () => {
    if (checkedNurseList !== [''])
      dispatch(deletetNurses({ checkedNurseList }));
    flagFuction();
  };
  const onClickUpdate = () => {
    dispatch(editNurses({ nurseList }));
  };
  const onChecked = (e) => {
    const { id, checked } = e.target;

    if (checked) {
      setCheckedNurseList([...checkedNurseList, nurseList[id]]);
    } else {
      setCheckedNurseList(
        checkedNurseList.filter(
          (checkedNurse) => checkedNurse.nurseSeq !== nurseList[id].nurseSeq,
        ),
      );
    }
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
      onChecked={onChecked}
      nurseList={nurseList}
    />
  );
};

export default WorkSheetForm;
