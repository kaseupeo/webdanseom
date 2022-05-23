/*
 * 관리 -워크 시트
 *
 */
import WorkSchedule from '../../../components/app/head/WorkSchedule';
import WorkManagementBtn from '../../../components/app/head/WorkManagementBtn';
import WorkScheduleSum from '../../../components/app/head/WorkScheduleSum';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initializeForm, setYAndM } from '../../../modules/management';
import WorkSheet from '../../../components/app/head/WorkSheet';
import { useNavigate } from 'react-router-dom';
const WorkSheetForm = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { date, response, responseError } = useSelector(({ management }) => ({
    date: management.date,
    response: management.response,
    responseError: management.responseError,
  }));

  const onClickMonthPlus = () => {
    const { year, month } = date;
    if (month < 13) {
      console.log(month + 1);
      dispatch(setYAndM(year, month + 1));
    } else dispatch(setYAndM({ year: year + 1, month: 1 }));
  };
  useEffect(() => {
    dispatch(initializeForm('response'));
  }, [dispatch]);

  return (
    <WorkSheet onClickMonthPlus={onClickMonthPlus}>
      <WorkManagementBtn />
      <WorkSchedule />
      <WorkScheduleSum />
    </WorkSheet>
  );
};

export default WorkSheetForm;
