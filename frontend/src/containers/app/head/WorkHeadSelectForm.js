/*
 *  조회-워크시트
 *
 */

import HeadSelectWork from '../../../components/app/head/HeadSelectWork';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const WorkHeadSelectForm = () => {
  const { nurseList } = useSelector(({ nurse }) => ({
    nurseList: nurse.nurseList,
  }));
  const dispatch = useDispatch();

  return (
    <div>
      <HeadSelectWork nurseList={nurseList} />
    </div>
  );
};

export default WorkHeadSelectForm;
