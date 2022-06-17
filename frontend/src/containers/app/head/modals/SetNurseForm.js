import SetNurseElement from '../../../../components/app/head/modals/SetNurseElement';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import nurse, {
  selectNurses,
  selectNursesSaga,
  insertNursesAsync,
  deleteNursesAsync,
  editNursesAsync,
  changeNurse,
  selectNursesAsync,
} from '../../../../modules/nurse';

const SetNurseForm = ({ modalOpen, closeModal }) => {
  const [checkedNurseList, setCheckedNurseList] = useState([]);

  const response = useSelector(({ nurse }) => nurse.response);
  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const nurseList = useSelector(({ nurse }) => nurse.nurseList);
  const dispatch = useDispatch();
  const [exNurseSeq, setExNurseSeq] = useState(1);
  //체크박스 초기화
  const initCheckBox = () => {
    const checkBox = document.getElementsByClassName('checkBox');
    const checkBoxAll = document.getElementsByClassName('checkBoxAll');
    for (var i = 0; i < checkBox.length; i++) {
      checkBox[i].checked = false;
    }
    checkBoxAll[0].checked = false;
  };
  //간호사 리스트 체크 초기화
  const initNurseList = () => {
    setCheckedNurseList([]);
  };
  //삽입
  const onClickInsert = () => {
    dispatch(
      insertNursesAsync({
        name: '간호사 ' + exNurseSeq,
        charge: '주중 전담',
        position: '일반간호사',
        annualLeave: 0,
      }),
    );
    dispatch(selectNursesAsync({ groupSeq }))
      .then(dispatch(selectNurses({ groupSeq })))
      .then(setCheckedNurseList([]))
      .then(setExNurseSeq(exNurseSeq + 1));
  };
  //삭제
  const onClickDelete = () => {
    if (checkedNurseList !== [''])
      dispatch(deleteNursesAsync({ checkedNurseList }));
    dispatch(selectNursesAsync({ groupSeq }))
      .then(initNurseList())
      .then(initCheckBox())
      .then(dispatch(selectNurses({ groupSeq })));
  };
  //수정
  const onClickUpdate = () => {
    dispatch(editNursesAsync({ nurseList }));
    dispatch(selectNursesAsync({ groupSeq }))
      .then(initNurseList())
      .then(initCheckBox())
      .then(dispatch(selectNurses({ groupSeq })));
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
      const checkBox = document.getElementsByClassName('checkBox');
      for (var i = 1; i < checkBox.length; i++) {
        checkBox[i].checked = false;
      }
    }
  };

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
