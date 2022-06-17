import SetDutyCodeElement from '../../../../components/app/head/modals/SetDutyCodeElement';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dutyCode, {
  selectDutyCodeAsync,
  selectDutyCode,
  insertDutyCode,
  deleteDutyCodeAsync,
  editDutyCodeAsync,
  changeDutyCode,
  initDutyCode,
} from '../../../../modules/dutyCode';

const WorkSheetForm = ({ modalOpen, closeModal }) => {
  const [checkedDutyList, setCheckedDutyList] = useState([]);

  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const response = useSelector(({ dutyCode }) => dutyCode.response);
  const dutyList = useSelector(({ dutyCode }) => dutyCode.dutyList);
  const dispatch = useDispatch();

  //체크박스 초기화
  const initCheckBox = () => {
    const checkBox = document.getElementsByClassName('checkBox');
    const checkBoxAll = document.getElementsByClassName('checkBoxAll');
    for (let i = 0; i < checkBox.length; i++) {
      checkBox[i].checked = false;
    }
    checkBoxAll[0].checked = false;
  };
  //듀티코드 리스트 체크 초기화
  const initDutyCodeList = () => {
    setCheckedDutyList([]);
  };

  //초기화
  const onClickInit = () => {
    setCheckedDutyList([]);
    dispatch(initDutyCode());
    dispatch(selectDutyCodeAsync({ groupSeq }))
      .then(initDutyCodeList())
      .then(initCheckBox())
      .then(dispatch(selectDutyCode({ groupSeq })));
  };
  //삽입
  const onClickInsert = () => {
    dispatch(insertDutyCode());
    dispatch(selectDutyCodeAsync({ groupSeq }))
      .then(initDutyCodeList(), initCheckBox())
      .then(dispatch(selectDutyCode({ groupSeq })));
  };
  //삭제
  const onClickDelete = () => {
    if (checkedDutyList !== [''])
      dispatch(deleteDutyCodeAsync({ checkedDutyList }));
    initDutyCodeList();
    initCheckBox();
    dispatch(selectDutyCodeAsync({ groupSeq })).then(
      response.message === '듀티 전체 조회 성공' &&
        dispatch(selectDutyCode({ groupSeq })),
    );
  };
  //수정
  const onClickUpdate = () => {
    dispatch(editDutyCodeAsync({ dutyList }));
    dispatch(selectDutyCodeAsync({ groupSeq }));
    initDutyCodeList();
    initCheckBox();
  };
  const onChecked = (e) => {
    const { id, checked } = e.target;

    if (checked) {
      setCheckedDutyList([...checkedDutyList, dutyList[id]]);
    } else {
      setCheckedDutyList(
        checkedDutyList.filter(
          (checkedDutyCode) => checkedDutyCode.dutySeq !== dutyList[id].dutySeq,
        ),
      );
    }
  };
  const onCheckedAll = (e) => {
    const { checked } = e.target;

    if (checked) {
      const checkBox = document.getElementsByClassName('checkBox');
      for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].checked = true;
      }

      setCheckedDutyList(dutyList.filter((dutyCode) => dutyCode.dutySeq));
    } else {
      setCheckedDutyList([]);
      const checkBox = document.getElementsByClassName('checkBox');
      for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].checked = false;
      }
    }
  };

  const onChange = (e) => {
    const { value, name, id } = e.target;

    //사용 가능
    if (name === 'isUsable') {
      if (value === 'true')
        dispatch(
          changeDutyCode({
            index: id,
            key: name,
            value: false,
          }),
        );
      else
        dispatch(
          changeDutyCode({
            index: id,
            key: name,
            value: true,
          }),
        );
    } else if (name === 'workType') {
      if (value === 'Off like' || value === 'Off') {
        dispatch(
          changeDutyCode({
            index: id,
            key: name,
            value,
          }),
        );
        dispatch(
          changeDutyCode({
            index: id,
            key: 'workingHours',
            value: '0',
          }),
        );
        dispatch(
          changeDutyCode({
            index: id,
            key: 'startTime',
            value: null,
          }),
        );
      } else {
        dispatch(
          changeDutyCode({
            index: id,
            key: name,
            value,
          }),
        );
        dispatch(
          changeDutyCode({
            index: id,
            key: 'startTime',
            value: '12:00:00',
          }),
        );
      }
    } else if (name === 'endTime') {
    } else
      dispatch(
        changeDutyCode({
          index: id,
          key: name,
          value,
        }),
      );
  };
  return (
    <SetDutyCodeElement
      modalOpen={modalOpen}
      closeModal={closeModal}
      onClickInsert={onClickInsert}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      onChecked={onChecked}
      onCheckedAll={onCheckedAll}
      onChange={onChange}
      dutyCodeList={dutyList}
      onClickInit={onClickInit}
    />
  );
};

export default WorkSheetForm;
