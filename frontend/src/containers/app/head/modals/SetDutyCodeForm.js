import SetDutyCodeElement from '../../../../components/app/head/modals/SetDutyCodeElement';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dutyCode, {
  selectDutyCodeAsync,
  insertDutyCodeAsync,
  deleteDutyCodeAsync,
  editDutyCodeAsync,
  changeDutyCode,
} from '../../../../modules/dutyCode';

const WorkSheetForm = ({ modalOpen, closeModal }) => {
  const [checkedDutyCodeList, setCheckedDutyCodeList] = useState([]);
  const [flag, setFlag] = useState(false);
  const flagFuction = () => {
    if (flag) setFlag(false);
    else setFlag(true);
  };
  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const response = useSelector(({ dutyCode }) => dutyCode.response);
  const dutyCodeList = useSelector(({ dutyCode }) => dutyCode.dutyCodeList);
  const dispatch = useDispatch();

  //체크박스 초기화
  const initCheckBox = () => {
    const checkBox = document.getElementsByClassName('checkBox');
    const checkBoxAll = document.getElementsByClassName('checkBoxAll');
    for (var i = 0; i < checkBox.length; i++) {
      checkBox[i].checked = false;
    }
    checkBoxAll.checked = false;
  };
  //듀티코드 리스트 체크 초기화
  const initDutyCodeList = () => {
    setCheckedDutyCodeList([]);
  };
  const onClickInsert = () => {
    dispatch(insertDutyCodeAsync());
    dispatch(selectDutyCodeAsync({ groupSeq }));
    setCheckedDutyCodeList([]);
    flagFuction();
  };
  const onClickDelete = () => {
    if (checkedDutyCodeList !== [''])
      dispatch(deleteDutyCodeAsync({ checkedDutyCodeList }));
    initCheckBox();
    dispatch(selectDutyCodeAsync({ groupSeq }));
    if (response.message === '듀티 전체 조회 성공') flagFuction();
  };
  const onClickUpdate = () => {
    dispatch(editDutyCodeAsync({ dutyCodeList }));
    dispatch(selectDutyCodeAsync({ groupSeq }));
    initCheckBox();
  };
  const onChecked = (e) => {
    const { id, checked } = e.target;
    console.log(checkedDutyCodeList);
    if (checked) {
      setCheckedDutyCodeList([...checkedDutyCodeList, dutyCodeList[id]]);
    } else {
      setCheckedDutyCodeList(
        checkedDutyCodeList.filter(
          (checkedDutyCode) =>
            checkedDutyCode.dutySeq !== dutyCodeList[id].dutySeq,
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

      setCheckedDutyCodeList(
        dutyCodeList.filter(
          (dutyCode) => dutyCode.dutySeq !== dutyCodeList[0].dutySeq,
        ),
      );
    } else {
      setCheckedDutyCodeList([]);
    }
  };

  useEffect(() => {
    dispatch(selectDutyCodeAsync({ groupSeq }));
  }, [dispatch, flag]);
  const onChange = (e) => {
    const { value, name, id } = e.target;

    console.log(id);
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
      dutyCodeList={dutyCodeList}
    />
  );
};

export default WorkSheetForm;
