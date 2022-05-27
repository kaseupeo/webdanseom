/*
 * 관리 -워크 시트
 *
 */
import WorkSchedule from '../../../components/app/head/WorkSchedule';
import WorkManagementBtnForm from './WorkManagementBtnForm';
import WorkScheduleSum from '../../../components/app/head/WorkScheduleSum';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNurses } from '../../../modules/nurse';
import {
  initializeForm,
  setPlusM,
  setMinusM,
  setPlusY,
  setMinusY,
} from '../../../modules/management';
import WorkSheet from '../../../components/app/head/WorkSheet';
import { useNavigate } from 'react-router-dom';
const WorkSheetForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [YAndM, setYAndM] = useState('');
  const [nurseModalOpen, setNurseModalOpen] = useState(false);
  const [relationModalOpen, setRelationModalOpen] = useState(false);
  const [dutyCodeModalOpen, setDutyCodeModalOpen] = useState(false);

  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
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
    dispatch(selectNurses({ groupSeq }));
  }, [dispatch]);

  return (
    <WorkSheet
      year={date.year}
      month={date.month}
      onClickMonthPlus={onClickMonthPlus}
      onClickMonthMinus={onClickMonthMinus}
    >
      <WorkManagementBtnForm />
      <WorkSchedule year={date.year} month={date.month} />
      <WorkScheduleSum year={date.year} month={date.month} />
    </WorkSheet>
  );
};

export default WorkSheetForm;
