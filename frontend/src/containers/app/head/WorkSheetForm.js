/*
 * 관리 -워크 시트
 *
 */
import WorkSchedule from '../../../components/app/head/WorkSchedule';
import WorkManagementBtnForm from './WorkManagementBtnForm';
import WorkScheduleSum from '../../../components/app/head/WorkScheduleSum';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNursesAsync } from '../../../modules/nurse';
import {
  initializeForm,
  setPlusM,
  setMinusM,
  setPlusY,
  setMinusY,
} from '../../../modules/management';
import WorkSheet from '../../../components/app/head/WorkSheet';
import { useNavigate } from 'react-router-dom';
import dutyCode, { selectDutyCode } from '../../../modules/dutyCode';
const WorkSheetForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [YAndM, setYAndM] = useState('');
  const [nurseModalOpen, setNurseModalOpen] = useState(false);
  const [relationModalOpen, setRelationModalOpen] = useState(false);
  const [dutyCodeModalOpen, setDutyCodeModalOpen] = useState(false);

  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const nurseList = useSelector(({ nurse }) => nurse.nurseList);
  const [dutyList, setDutyList] = useState([]);
  const tempDutyList = useSelector(({ dutyCode }) => dutyCode.dutyList);
  const [dutyTypeList, setDutyTypeList] = useState([]);
  useEffect(() => {
    const temp = [{}];

    for (let i = 0; i < tempDutyList.length; i++) {
      if (tempDutyList[i].isUsable) temp.push(tempDutyList[i]);
    }
    setDutyList(temp);

    if (!(temp.find((e) => e.workType === 'Mid') === undefined))
      setDutyTypeList(['Day', 'Mid', 'Evening', 'Night', 'Off']);
    else setDutyTypeList(['Day', 'Evening', 'Night', 'Off']);
  }, [tempDutyList]);

  const openNurseModal = () => {
    setNurseModalOpen(true);
  };
  const closeNurseModal = () => {
    setNurseModalOpen(false);
  };

  const openRelationModal = () => {
    setRelationModalOpen(true);
  };
  const closeRelationModal = () => {
    setRelationModalOpen(false);
  };

  const openDutyCodeModal = () => {
    setDutyCodeModalOpen(true);
  };
  const closeDutyCodeModal = () => {
    setDutyCodeModalOpen(false);
  };

  const { date, response, responseError } = useSelector(({ management }) => ({
    date: management.date,
    response: management.response,
    responseError: management.responseError,
  }));

  const onClickMonthPlus = () => {
    const { year, month } = date;
    if (month < 12) {
      dispatch(setPlusM());
    } else dispatch(setPlusY());
  };
  const onClickMonthMinus = () => {
    const { year, month } = date;
    if (month > 1) {
      dispatch(setMinusM());
    } else dispatch(setMinusY());
  };
  useEffect(() => {
    dispatch(initializeForm('response'));
  }, [dispatch]);

  useEffect(() => {
    if (groupSeq === null) return;
    dispatch(selectDutyCode({ groupSeq }));
    dispatch(selectNursesAsync({ groupSeq }));
    setDutyList([]);
  }, [dispatch, groupSeq]);

  return (
    <WorkSheet
      year={date.year}
      month={date.month}
      onClickMonthPlus={onClickMonthPlus}
      onClickMonthMinus={onClickMonthMinus}
      nurseList={nurseList}
      dutyTypeList={dutyTypeList}
    >
      <WorkManagementBtnForm />
      <WorkSchedule
        year={date.year}
        month={date.month}
        dutyList={dutyList}
        dutyTypeList={dutyTypeList}
      />
      <WorkScheduleSum
        year={date.year}
        month={date.month}
        dutyList={dutyList}
        dutyTypeList={dutyTypeList}
      />
    </WorkSheet>
  );
};

export default WorkSheetForm;
