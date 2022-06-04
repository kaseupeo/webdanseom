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
  initDutyCodeAsync,
} from '../../../../modules/dutyCode';

const WorkSheetForm = ({ modalOpen, closeModal }) => {
  const [checkedDutyList, setCheckedDutyList] = useState([]);
  const [flag, setFlag] = useState(false);

  const flagFuction = () => {
    if (flag) setFlag(false);
    else setFlag(true);
  };
  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const response = useSelector(({ dutyCode }) => dutyCode.response);
  const dutyList = useSelector(({ dutyCode }) => dutyCode.dutyList);
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
    initDutyCodeAsync({});
    setCheckedDutyList([]);
  };

  const onClickInit = () => {
    setCheckedDutyList([]);
    dispatch(initDutyCodeAsync());
    dispatch(selectDutyCodeAsync({ groupSeq }));
  };
  const onClickInsert = () => {
    dispatch(insertDutyCodeAsync());
    dispatch(selectDutyCodeAsync({ groupSeq }));
    setCheckedDutyList([]);
    flagFuction();
  };
  const onClickDelete = () => {
    console.log(checkedDutyList);
    if (checkedDutyList !== [''])
      dispatch(deleteDutyCodeAsync({ checkedDutyList }));
    initDutyCodeList();
    initCheckBox();
    dispatch(selectDutyCodeAsync({ groupSeq }));
    if (response.message === '듀티 전체 조회 성공') flagFuction();
  };
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
      for (var i = 1; i < checkBox.length; i++) {
        checkBox[i].checked = true;
      }

      setCheckedDutyList(
        dutyList.filter((dutyCode) => dutyCode.dutySeq !== dutyList[0].dutySeq),
      );
    } else {
      setCheckedDutyList([]);
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
      dutyCodeList={dutyList}
      onClickInit={onClickInit}
    />
  );
};

export default WorkSheetForm;
