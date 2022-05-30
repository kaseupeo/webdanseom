import SetNurseElement from '../../../../components/app/head/modals/SetNurseElement';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import nurse, {
  initializeForm,
  selectNurses,
  insertNurses,
  deletetNurses,
  editNurses,
  changeNurse,
} from '../../../../modules/nurse';

const SetNurseForm = ({ modalOpen, closeModal }) => {
  const [flag, setFlag] = useState(false);
  const [checkedNurseList, setCheckedNurseList] = useState([]);
  const flagFuction = () => {
    if (flag) setFlag(false);
    else setFlag(true);
  };
  const response = useSelector(({ nurse }) => nurse.response);
  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const nurseList = useSelector(({ nurse }) => nurse.nurseList);
  const dispatch = useDispatch();
  const [exNurseSeq, setExNurseSeq] = useState(1);
  const initCheckBox = () => {
    const checkBox = document.getElementsByClassName('checkBox');
    const checkBoxAll = document.getElementsByClassName('checkBoxAll');
    for (var i = 0; i < checkBox.length; i++) {
      checkBox[i].checked = false;
    }
    checkBoxAll[0].checked = false;
  };
  const initNurseList = () => {
    setCheckedNurseList([]);
  };
  const onClickInsert = () => {
    dispatch(
      insertNurses({
        name: '간호사 ' + exNurseSeq,
        charge: '주중 전담',
        position: '일반',
        annualLeave: 0,
      }),
    );

    setCheckedNurseList([]);
    flagFuction();

    setExNurseSeq(exNurseSeq + 1);
  };

  const onClickDelete = () => {
    if (checkedNurseList !== [''])
      dispatch(deletetNurses({ checkedNurseList }));

    if (response.message === '간호사 목록 조회 성공') flagFuction();
  };

  const onClickUpdate = () => {
    dispatch(editNurses({ nurseList }));
    initCheckBox();
  };

  const onChecked = (e) => {
    const { id, checked } = e.target;

    console.log(checkedNurseList);
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

  const onCheckedAll = (e) => {
    const { checked } = e.target;

    if (checked) {
      const checkBox = document.getElementsByClassName('checkBox');
      for (var i = 1; i < checkBox.length; i++) {
        checkBox[i].checked = true;
      }

      setCheckedNurseList(
        nurseList.filter((nurse) => nurse.nurseSeq !== nurseList[0].nurseSeq),
      );
    } else {
      setCheckedNurseList([]);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(selectNurses({ groupSeq }));
      initCheckBox();
    }, 1000);
  }, [dispatch, flag]);
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
      onCheckedAll={onCheckedAll}
      nurseList={nurseList}
    />
  );
};

export default SetNurseForm;
