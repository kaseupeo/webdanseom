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
import { selectPreceptorsAsync } from '../../../modules/preceptor';
import work, {
  selectWorksHeadAsync,
  changeWork,
  selectWorksHead,
  addWorkInfo,
  insertWorks,
  insertWorksExtra,
} from '../../../modules/work';
import WorkSheet from '../../../components/app/head/WorkSheet';
import { useNavigate } from 'react-router-dom';
import dutyCode, {
  selectDutyCode,
  selectDutyCodeAsync,
} from '../../../modules/dutyCode';

const WorkSheetForm = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [YAndM, setYAndM] = useState('');
  const [nurseModalOpen, setNurseModalOpen] = useState(false);
  const [relationModalOpen, setRelationModalOpen] = useState(false);
  const [dutyCodeModalOpen, setDutyCodeModalOpen] = useState(false);

  const groupSeq = useSelector(({ group }) => group.nurseGroup.seq);
  const nurseList = useSelector(({ nurse }) => nurse.nurseList);
  const tempDutyList = useSelector(({ dutyCode }) => dutyCode.dutyList);
  const [dutyList, setDutyList] = useState([]);
  const [dutyTypeList, setDutyTypeList] = useState([]);
  const requestWorkList = useSelector(({ work }) => work.requestWorkList);
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

  const { date, response, responseError } = useSelector(({ management }) => ({
    date: management.date,
    response: management.response,
    responseError: management.responseError,
  }));
  const nowDate = new Date(date.year, date.month, 0);
  const onClickMonthPlus = () => {
    const { year, month } = date;

    if (month < 12) {
      dispatch(setPlusM());
    } else dispatch(setPlusY());
    initWorkInfo();
  };
  const onClickMonthMinus = () => {
    const { year, month } = date;
    if (month > 1) {
      dispatch(setMinusM());
    } else dispatch(setMinusY());
    initWorkInfo();
  };
  useEffect(() => {
    dispatch(initializeForm('response'));
  }, [dispatch]);
  const [workArray, setWorkArray] = useState([]);

  const initWorkArray = () => {
    if (nurseList.length === 0) return;
    setWorkArray([]);
    const arrSize = nurseList.length;
    console.log(arrSize);
    for (let i = 0; i < arrSize; i++) {
      for (let j = 0; j < nowDate.getDate(); j++) {
        setWorkArray((e) => [
          ...e,
          {
            nurseSeq: nurseList[i].nurseSeq,
            date:
              ('0000' + date.year).slice(-4) +
              '-' +
              ('00' + date.month).slice(-2) +
              '-' +
              ('00' + (j + 1)).slice(-2),
            duty: null,
          },
        ]);
      }
    }
  };
  const initWorkInfo = () => {
    const { year, month } = date;

    dispatch(selectWorksHeadAsync('' + year + month))
      .then(initWorkArray())
      .then(dispatch(selectWorksHead('' + year + month)));
  };
  useEffect(() => {
    dispatch(addWorkInfo(workArray));
  }, [workArray]);
  useEffect(() => {
    if (groupSeq === null) return;
    dispatch(selectDutyCodeAsync({ groupSeq }));
    dispatch(selectPreceptorsAsync());
    dispatch(selectNursesAsync({ groupSeq }));

    setDutyList([]);
  }, [dispatch, groupSeq, date]);

  useEffect(() => {
    initWorkInfo();
  }, [nurseList]);

  const onChangeWork = (e) => {
    const { id, value } = e.target;
    dispatch(
      changeWork({
        index: id,
        key: 'duty',
        value,
      }),
    );
  };
  const onClickWorkExtraBtn = () => {
    dispatch(insertWorksExtra({ requestWorkList }));
  };
  const onClickWorkBtn = () => {
    dispatch(insertWorks({ requestWorkList }));
  };
  return (
    <WorkSheet
      year={date.year}
      month={date.month}
      onClickMonthPlus={onClickMonthPlus}
      onClickMonthMinus={onClickMonthMinus}
      nurseList={nurseList}
      dutyTypeList={dutyTypeList}
    >
      <WorkManagementBtnForm
        onClickWorkExtraBtn={onClickWorkExtraBtn}
        onClickWorkBtn={onClickWorkBtn}
      />
      <WorkSchedule
        year={date.year}
        month={date.month}
        dutyList={dutyList}
        dutyTypeList={dutyTypeList}
        onChangeWork={onChangeWork}
      />
      <WorkScheduleSum
        year={date.year}
        month={date.month}
        dutyList={dutyList}
        workList={requestWorkList}
        dutyTypeList={dutyTypeList}
      />
    </WorkSheet>
  );
};

export default WorkSheetForm;
