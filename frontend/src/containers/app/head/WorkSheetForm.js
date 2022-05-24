/*
 * 관리 -워크 시트
 *
 */
import WorkSchedule from '../../../components/app/head/WorkSchedule';
import WorkManagementBtn from '../../../components/app/head/WorkManagementBtn';
import WorkScheduleSum from '../../../components/app/head/WorkScheduleSum';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  const [error, setError] = useState('');
  const [YAndM, setYAndM] = useState('');
  const dispatch = useDispatch();
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
    if (month > 0) {
      dispatch(setMinusM());
    } else dispatch(setMinusY());
  };
  useEffect(() => {
    dispatch(initializeForm('response'));
  }, [dispatch]);

  return (
    <WorkSheet
      year={date.year}
      month={date.month}
      onClickMonthPlus={onClickMonthPlus}
      onClickMonthMinus={onClickMonthMinus}
    >
      <WorkManagementBtn />
      <WorkSchedule year={date.year} month={date.month} />
      <WorkScheduleSum year={date.year} month={date.month} />
    </WorkSheet>
  );
};

export default WorkSheetForm;
